import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import { sendSignInLinkToEmail } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"


export const useSignIn = () => {
    const [ isCancelled, setIsCancelled ] = useState(false)
    const [ isPending, setIsPending ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ emailError, setEmailError ] = useState(null)
    const { dispatch } = useAuthContext()

    const logIn = async (email, password) => {
        setIsPending(true)
        setError(null)

        // sign the user in
        try {
            const res = await signInWithEmailAndPassword(projectAuth, email, password)

            //dispatch login action
            dispatch({ type:'LOGIN', payload: res.user})

            //update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }

        } catch (err) {
            if(!isCancelled){
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
                const errorCode = err.code;
                console.error(`Error signing in with email link: ${errorCode} - ${err.message}`);
            }
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

                // Handle errors here
                const errorCode = error.code;
                console.error(`Error signing in with custom token: ${errorCode} - ${emailError}`);

                switch (errorCode) {
                    case 'auth/invalid-custom-token':
                        console.error("The custom token is malformed, has expired, or is invalid.");
                        break;
                    case 'auth/custom-token-mismatch':
                        console.error("The custom token was not issued for the current Firebase project.");
                        break;
                    // Add more specific error handling as needed
                    default:
                        console.error("An unexpected error occurred.");
                }
            }
        }
    }

    useEffect(() => {
        return() => setIsCancelled(true)
    },[])

    return { isPending, error, emailError, logIn, signupEmail, setEmailError}

}
