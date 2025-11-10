import React from 'react'

import HeroImage from '../assets/landingPage/Wordmark.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <img src={HeroImage} alt="Hero" className='w-[100px] lg:w-[150px] md:w-[120px] sm:w-[100px]'/>
      <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>Sign In</NavLink>
    </div>
  )
}
