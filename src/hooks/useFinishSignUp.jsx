import { useHistory } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"


export const useFinishSignUp = () => {

  const { user } = useAuthContext()
  const history = useHistory()

  const completeSignUp = () => {
    if (!user.displayName && !user.photoURL) {
      history.push("/signup-option?step=1&destination=2")
    }
  }

  return { completeSignUp, user, history }
}
