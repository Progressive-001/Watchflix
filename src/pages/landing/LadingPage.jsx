import Header from '../../components/Header'
import LandingDetails from '../../components/LandingDetails'


import './landingPage.css'

import SecondSection from '../../components/SecondSection'
import FaqSection from '../../components/faq/FaqSection'
import ThirdSection from '../../components/ThirdSection'
import FooterLandingPage from '../../components/footers/FooterLandingPage'

export default function LandingPage() {

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