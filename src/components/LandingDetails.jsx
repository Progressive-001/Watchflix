import React from 'react'
import Signup from './Signup'

import HeroImage from '../assets/landingPage/Hero Image.webp'

import './LandingDetail.css'


export default function LandingDetails() {
  return (
    <div className='landing-details '>

      <div className='image-container'>
        <img src={HeroImage} alt='' className='hero-image '/>
        <div className='overlay'></div>
      </div>
      
      <div className='details font-netflix flex flex-col justify-center items-center m-[0px, auto] lg:gap-[0px] md:gap-[0px]'>
        <div>
          <h1 className=' font-bold text-mlargeTitle lg:text-blargeTitle pb-[10px]'>Unlimited movies, TV shows, and more</h1>
          <p className=' font-medium text-mheadline2 pb-[20px]'>Starts at ₦2,500. Cancel anytime.</p>
        </div>
        <div className='w-full max-w-[685px] mb-[45px]'>
          <Signup />
        </div>
      </div>
  
    </div>
  )
}
