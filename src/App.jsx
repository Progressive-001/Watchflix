// import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LadingPage from './pages/landing/LadingPage'

import './App.css'

function App() {

  return (
    <div className='app-container'>

    <BrowserRouter>

      <Switch>

        <Route exact path='/'><LadingPage /></Route>

        <Route exact path='/'><LadingPage /></Route>

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
