import { projectAuth } from "../firebase/config"
import { isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth"

export const useGetOrCreateUser = () => {

  const getOrCreateUser = async () => {
    
    if (projectAuth.currentUser) {

      return projectAuth.currentUser;

    } 
    if (isSignInWithEmailLink(projectAuth, window.location.href)) {

      const email = localStorage.getItem("emailForSignIn")

      if (!email) {

        throw new Error("Signup session expired")

      }

      // Complete email-link auth
      const { user } = await signInWithEmailLink(
        projectAuth,
        email,
        window.location.href
      )

      localStorage.removeItem("emailForSignIn")


      return user;

    } 

    throw new Error ("No authenticated user found");

  }
  
  return { getOrCreateUser}
}
