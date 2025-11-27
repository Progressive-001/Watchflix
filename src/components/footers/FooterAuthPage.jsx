//Hooks
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function FooterAuthPage() {
  return (
  <div className=' mt-10 flex flex-col gap-[35px] bg-gray-700 w-full'>
        
        <NavLink className='question text-[rgba(255,255,255,0.7)] active:text-red-700' to="/faq">Questions? Contact us.</NavLink>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full max-w-full text-[rgba(255,255,255,0.7)]'>
          <NavLink className='active:text-red-700' to="/faq">FAQ</NavLink>
          <NavLink className='active:text-red-700' to="/faq">Help Center</NavLink>
          <NavLink className='active:text-red-700' to="/faq">Terms of Use</NavLink>
          <NavLink className='active:text-red-700' to="/faq">Privacy</NavLink>
          <NavLink className='active:text-red-700' to="/faq">Cookie Preferences</NavLink>
        </div>

      </div>
  )
}
