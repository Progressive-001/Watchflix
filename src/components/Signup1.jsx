//Hooks
import { useState} from 'react'

//assets
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

//styles
import './signup1.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  return (

    <div className='flex flex-col gap-[20px]'>

      <p className='font-normal text-body leading-[24px] signupContext'>Ready to watch? Enter your email to create or restart your membership.</p> 

      <form onSubmit={e => {
        e.preventDefault()
        console.log(email)}} 
        className='signup-container flex flex-col lg:flex-row md:flex-row justify-center items-center gap-[10px]'>

          <input
            type="email"
            placeholder='Email address'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='input-container'
          />
          
          {/* <div className='buttonContainer flex flex-row justify-center items-center font-netflix text-mheadline2 bg-[#E50914]'> */}
            <button className=' pt-10 buttonContainer-2 flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'>
              Get Started
              <img src={SignupArrow} alt="signup-icon" className='arrow-icon'/>
            </button>
          {/* </div> */}
        
      </form>
    </div>

  )
}
