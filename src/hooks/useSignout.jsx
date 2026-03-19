import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import { signOut } from "firebase/auth"
import { useEffect } from "react"

export const useSignout = () => {
    const[isCancelled, setIsCancelled] = useState(false)
    const [ isPending, setIsPending ] = useState(false)
    const [ error, setError ] = useState(null)
    const { dispatch } = useAuthContext()

    const logOut = async () => {
        setIsPending(true)
        setError(null)

        // sign the user out
        try {
            await signOut(projectAuth)

            //dispatch logout action
            dispatch({ type:'LOGOUT' })

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
            }
        }
    }

    useEffect(() => {
        return() => setIsCancelled(true)
    },[])

    return { isPending, error, logOut}
}

