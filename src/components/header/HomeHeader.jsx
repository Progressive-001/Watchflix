import React from 'react'

import HeroImage from '../../assets/landingPage/Wordmark.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function HomeHeader() {
  return (
    <div>
        
        <div>
            <img src={HeroImage} alt="Hero" className='w-[100px] lg:w-[150px] md:w-[120px] sm:w-[100px]' />
            <div>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>Home</NavLink>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>TV Shows</NavLink>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>Movies</NavLink>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>New & Popular</NavLink>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>My List</NavLink>
                <NavLink to="/login" className='nav-button font-netflix text-body font-bold'>Browse by Language</NavLink>
            </div>
        </div>

        <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>

    </div>
  )
}
