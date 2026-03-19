//Hooks
import { NavLink } from 'react-router-dom'

export default function FooterAuthPage({variant}) {
  return (
  <div className={`pb-[50px] bg-[#161616] text-[rgba(255,255,255,0.7)] mt-10 flex flex-col gap-[35px] ${variant === 'light' && 'bg-[#F2F2F2] !text-[#000000B3]'} w-full py-[30px] px-[40px] mx-[auto] justify-center items-start z-[9999]`}>
        
        <NavLink className=' mx-[60px] question text-left active:text-red-700' to="/faq">Questions? Contact us.</NavLink>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full max-w-full mx-[60px]'>
            <NavLink className='active:text-red-700' to="/faq">FAQ</NavLink>
            <NavLink className='active:text-red-700' to="/faq">Help Center</NavLink>
            <NavLink className='active:text-red-700' to="/faq">Terms of Use</NavLink>
            <NavLink className='active:text-red-700' to="/faq">Privacy</NavLink>
            <NavLink className='active:text-red-700' to="/faq">Cookie Preferences</NavLink>
            <NavLink className='active:text-red-700' to="/faq">Corporate Information</NavLink>
        </div>
      </div>
  )
}
