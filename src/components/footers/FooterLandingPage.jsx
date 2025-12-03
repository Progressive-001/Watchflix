//Hooks
import { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

//components
import Signup1 from '../Signup1'
import ScrollButton from '../ScrollButton'

//styles
import './FooterLandingPage.css'

//assets
import icon1 from '/src/assets/landingPage/dropDown.svg'
import icon2 from '/src/assets/landingPage/globeLang.svg'


export default function FooterLandingPage() {
  const[isOpen, setIsOpen] = useState(false);
  const[language, setLanguage] = useState('English');


  const toggleDown = ()=>{setIsOpen(!isOpen)}

  const handleSelect = (lang)=>{
    setIsOpen(!isOpen)
    setLanguage(lang)
  }

  return (
    <div className='footer-container mt-10 flex flex-col gap-[35px] relative'>
      <Signup1 />
      <NavLink className='question text-[rgba(255,255,255,0.7)] active:text-red-700' to="/faq">Questions? Contact us.</NavLink>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full max-w-full text-[rgba(255,255,255,0.7)]'>
        <NavLink className='active:text-red-700' to="/faq">FAQ</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Help Center</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Account</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Media Center</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Investor Relations</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Jobs</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Ways to Watch</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Terms of Use</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Privacy</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Cookie Preferences</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Corporate Information</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Contact Us</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Speed Test</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Legal Notices</NavLink>
        <NavLink className='active:text-red-700' to="/faq">Only on Netflix</NavLink>
      </div>

      {/* <div className='flex'>
        <img src={icon2} alt="" className='invert brightness-100'/>
        <select className='selection text-[rgba(255,255,255,0.7)] px-[20px]' name=""  id="">
          <option value="English">English</option>
        </select>
        <img src={icon1} alt="" className='invert brightness-100' />
      </div> */}

      <div className='relative flex'>
        <button onClick={toggleDown} className='selection flex justify-center py-[8px] px-[25px] gap-[8px] active:'>
          <img src={icon2} alt="" className='invert brightness-100'/>
          <span>{language}</span>
          <img src={icon1} alt="" className={` invert brightness-100  ${isOpen? 'rotate-180' : '' }`}/>
        </button>
       
       {isOpen&& (
        <div className='absolute top-11 left-0 bg-[rgb(68,142,244)] w-full max-w-[130px] cursor-pointer'>
          <div onClick={()=>handleSelect('English')}>English</div>
          <div onClick={()=>handleSelect('French')}>French</div>
       </div>)}
      </div>

      <h3 className='text-left text-[rgba(255,255,255,0.7)]'>Netflix Nigeria</h3>

      <p className='text-left lg:mb-[25px] text-[rgba(255,255,255,0.7)]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <NavLink to="/faq" className="text-[rgb(68,142,244)]">Learn more.</NavLink> </p>

     <button className='buttonContainer-1 flex flex-row justify-center items-center w-full max-w-[858px] font-netflix bg-[#E50914] font-bold text-smallbody lg:hidden'>
        Get Started
      </button>
      <ScrollButton />

    </div>
  )
}
