// import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LadingPage from './pages/landing/LadingPage'

import './App.css'
import SignIn from './pages/authentication/SignIn'

function App() {

  return (
    <div className='app-container'>

    <BrowserRouter basename="/Watchflix">

      <Switch>

        <Route exact path='/'><LadingPage /></Route>

        <Route exact path='/login'><SignIn /></Route>

        <Route exact path='/'><LadingPage /></Route>

        <Route exact path='/'><LadingPage /></Route>

        <Route exact path='/'><LadingPage /></Route>

        <Route exact path='/'><LadingPage /></Route>
        
        <Route exact path='/'><LadingPage /></Route>

      </Switch>

    </BrowserRouter>

    </div>
  )
}

export default App
