//Hooks
import { useState} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

//assets
import heroImage2 from '../../assets/landingPage/Hero-Image-2.webp'
import HeroImage from '../../assets/landingPage/Wordmark.svg'

//components
import FooterAuthPage from '../../components/footers/FooterAuthPage'

//styles
import './SignIn.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (

    <div className='landing-detail flex flex-col justify-center items-center m-[0px, auto] lg:gap-[0px] md:gap-[0px] p-[20px] z-[9999] relative h-[100vh]'>

        <div className='z-[100] relative mb-[40px]'>
            <img src={HeroImage} alt="" className=''/>
        </div>
        
        <div className='image-container'>
          <img src={heroImage2} alt='' className='hero-image'/>
          <div className='overlay'></div>
        </div>

        
        <div className='flex flex-col gap-[20px]'>
    
            <h1 className='font-normal text-body'>Sign In</h1> 
    
            <form onSubmit={e => {
                e.preventDefault()
                console.log(email, password)}} 
                className='signup-container flex flex-col justify-center items-center gap-[10px]'>
        
                <input
                    type="email"
                    placeholder='Email or mobile number'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='input-container'
                />

                <input
                    type="password"
                    placeholder='Password'
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='input-container'
                />
                
                
                <button className=' pt-10 buttonContainer flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'>
                    Sign In
                </button>
                <span>OR</span>
                <button className=' pt-10 buttonContainer flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'>
                    Use a Sign-In Code
                </button>
                <NavLink to="/loginHelp" className='nav-button font-netflix text-body font-bold'>Forgot password?</NavLink>

                <div>
                    <input type="checkbox" className='checkbox-style'/> 
                    <label className='font-netflix text-body'>Remember me</label>
                </div>
                
            </form>

        </div>

        <FooterAuthPage />

    </div>
    

  )
}
