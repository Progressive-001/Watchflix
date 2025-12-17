//Hooks
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { use, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages
import LadingPage from './pages/landing/LadingPage'
import SignIn from './pages/authentication/SignIn'
import SignUp from './pages/authentication/SignUp'
import CompleteSignup from './pages/authentication/CompleteSignup'
import SignupOpt from './pages/authentication/SignupOpt'
import AccountHome from './pages/account-home/AccountHome'



//styles
import './App.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'

function App() {
  const { authIsReady, user } = useAuthContext()
  const [ steps, setSetps ] = useState(2)
  

  return (
    <AnimatePresence>
      <motion.div 
        className='app-container'
        key="page-motion"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {authIsReady &&(

          <BrowserRouter basename="/">

            <Switch>

              <Route exact path='/'>
                {user && <Redirect to="/account-home" />}
                {user == null && <LadingPage />}
              </Route>

              <Route exact path='/login'>
                {user && <Redirect to="/account-home" />}
                {!user && <SignIn/>}
              </Route>

              <Route path={`/authentication/complete-signup`}>
                {/* {!user &&  <CompleteSignup stepping={steps} />}
                {user && <Redirect to="/account-home" />} */}
                {user && (user.displayName  || user.photoURL) && <Redirect to="/account-home" />}
                {user && (user.displayName == null || user.photoURL == null ) && <CompleteSignup stepping={steps} />}
                {user == null &&  <Redirect to="/" />}
                {/* {!user && (user.displayName == null || user.photoURL == null) && <Redirect to="/" />} */}
              </Route>

              <Route path={`/signup-option`}>
                {!user && <SignupOpt stepping={steps} />}
                {user && <Redirect to="/authentication/complete-signup" />}
              </Route>

              <Route path={`/account-home`}>
                {!user && <Redirect to="/" />}
                {user && <AccountHome />}
              </Route>

              {/* <Route path={`/account-home`}>
                {!user && <Redirect to="/" />}
                {user && <AccountHome />}
              </Route> */}
              
        
              {/* <Route path="/SignIn" >
                {!user && <SignIn />}
                {user && <Redirect to="/account-home" />}
              </Route> */}

              <Route path="/signup">
                {!user && <SignUp />}
                {user && <Redirect to="/authentication/complete-signup" />}
              </Route>

            </Switch>

          </BrowserRouter>
        )} 
      </motion.div>
    </AnimatePresence>
  )
}

export default App
