import Header from '../../components/Header'
import LandingDetails from '../../components/LandingDetails'
// import { useEffect } from 'react'
// import HeroImage from '/assets/landingPage/Hero Image.webp'

import './landingPage.css'
// import FirstSection from '../../components/Firstsection'
import SecondSection from '../../components/SecondSection'
import FaqSection from '../../components/FaqSection'
import ThirdSection from '../../components/ThirdSection'
import FooterLandingPage from '../../components/footers/FooterLandingPage'

export default function LandingPage() {
  // useEffect(() =>{
  //   const API_KEY = '03858a4709caa9506ba77cb561f9b589';
  //   fetch(`https://api.themoviedb.org/3/movie/560?api_key=${API_KEY}`)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.err(err))
  // },[])

  return (
    <div className='landing-container'>

      <div className='landing-page'>
        <Header />
        <LandingDetails />
      </div>

      <div className=' w-full'>
        {/* full-bleed background row: uses viewport width and is centered regardless of parent centering */}
        <div
          className='relative sections'
          style={{
            width: '100vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            // overflowX: 'hidden',
          }}
        >
          <div className='subSections flex flex-col w-full max-w-[1559px] mx-auto px-[35px] max-lg:px-[100px] max-md:px-[80px] overflow-x-hidden'>
            {/* <FirstSection /> */}
            <SecondSection />
            <ThirdSection />
            <FaqSection />
            <FooterLandingPage />
          </div>
        </div>
      </div>
    </div>
  )
}


{/* <div className="full-bleed bg-black">
  <div className="subSections flex flex-col">
    <SecondSection />
    <ThirdSection />
    <FaqSection />
    <FooterLandingPage />
  </div>
</div> */}