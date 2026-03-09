import { useEffect, useState } from "react"
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { sendSignInLinkToEmail } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const history = useHistory()

    // PASSWORD SIGNUP
    const signup = async (email, password, setIsEmailValid, setIsPasswordValid) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await createUserWithEmailAndPassword(projectAuth, email, password)

            if (!res) throw new Error("Could not complete signup")

            //dispatch login action 
            dispatch({ type: "LOGIN", payload: res.user })

            await setTimeout(() => history.push('/authentication/complete-signup?step=2&destination=2'), 1000)

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (err) {
            if (!isCancelled) return;

            const errorCode = err.code;

            switch(errorCode){
                case "auth/email-already-in-use":
                    setError("This email is already registered. Try logging in.")
                    setIsEmailValid(false)
                    break;

                case "auth/invalid-email":
                    setError("Enter a valid email address")
                    setIsEmailValid(false)
                    break;

                case "auth/weak-password":
                    setError("Password must be at least 6 characters.")
                    setIsPasswordValid(false)
                    break;

                case "auth/missing-password":
                    setError("Password is required")
                    setIsPasswordValid(false)
                    break;

                case "auth/missing-email":
                    setError("Email is required.")
                    setIsEmailValid(false)
                    break;

                default:
                    setEmailError(err.message) 

            }

            setIsPending(false)

        }
    }



    // EMAIL-LINK SIGNUP
    const actionCodeSettings = {
        url: `${window.location.origin}/authentication/complete-signup?step=2&destination=2`,
        handleCodeInApp: true,
    };

    const signupEmail = async (signEmail) => {
        setEmailError(null)
        setIsPending(true)

        try {
            await sendSignInLinkToEmail(projectAuth, signEmail, actionCodeSettings)

            window.localStorage.setItem("emailForSignIn", signEmail)


            if (!isCancelled) {
                setIsPending(false)
                setEmailError(null)
            }

        } catch (err) {
            if (!isCancelled) {
                setEmailError(err.message)  
                setIsPending(false)
            }

        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, emailError, isPending, signup, signupEmail, setError }
}
