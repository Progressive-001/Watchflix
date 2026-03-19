//Hooks
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
// import { use, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { lazy, Suspense } from 'react'

//pages
const LandingPage =    lazy(() =>  import('./pages/landing/LandingPage'))
const SignIn =         lazy(() => import('./pages/authentication/SignIn')) 
const SignUp =         lazy(() => import('./pages/authentication/SignUp')) 
const CompleteSignup = lazy(() => import('./pages/authentication/CompleteSignup')) 
const SignupOpt =      lazy(() => import( './pages/authentication/SignupOpt'))
const AccountHome =    lazy(() => import('./pages/account-home/AccountHome')) 



//styles
import './App.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'

function App() {
  const { authIsReady, user } = useAuthContext()
  // const [ steps, setSetps ] = useState(1)

  

  return (
    // <AnimatePresence>
      <div 
        className='app-container'
        // key="page-motion"
        // initial={{ opacity: 0, x: 0 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: 0}}
        // transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {authIsReady &&(

          <BrowserRouter basename="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>

              
              
                <Route exact path='/'>
                  {user && <Redirect to="/account-home" />}
                  {user == null && <LandingPage />}
                </Route>

                <Route exact path='/login'>
                  {user && <Redirect to="/account-home" />}
                  {!user && <SignIn/>}
                </Route>

                <Route exact path='/signup'>
                  {!user && <SignUp />}
                  {user && <Redirect to="/authentication/complete-signup" />}
                </Route>

                <Route path="/authentication/complete-signup">
                  {!user &&  <Redirect to="/" />}
                  {user && (user.displayName == null || user.photoURL == null ) && <CompleteSignup />}
                  {user && (user.displayName && user.photoURL) && <Redirect to="/account-home" />}
                </Route>

                <Route path={`/account-home`}>
                  {!user && <Redirect to="/" />}
                  {user && (user.displayName  || user.photoURL) && <AccountHome />}
                  {user && (user.displayName == null || user.photoURL == null ) && <CompleteSignup />}
                  {/* {user && <AccountHome />} */}
                  {/* {user == null &&  <Redirect to="/" />} */}
                </Route>

                {/* <Route path={`/account-home`}>
                  {!user && <Redirect to="/" />}
                  {user && <AccountHome />}
                </Route> */}
                
          
                {/* <Route path="/SignIn" >
                  {!user && <SignIn />}
                  {user && <Redirect to="/account-home" />}
                </Route> */}

                <Route exact path='/signup-option'>
                  {!user && <SignupOpt />}
                  {user && <Redirect to="/account-home" />}
                </Route>

              </Switch>
            </Suspense>
          </BrowserRouter>
        )} 
      </div>
    // </AnimatePresence>
  )
}

export default App
