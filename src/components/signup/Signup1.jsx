//Hooks
import { useState} from 'react'
import { useFinishSignUp } from '../../hooks/useFinishSignUp'


//assets
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

//styles
import './signup1.css'


export default function Signup() {
  const [email, setEmail] = useState('')
  const { completeSignUp, user } = useFinishSignUp();
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
            className={`input-container ${user&& 'hidden'}`}
          />
          
          {/* <div className='buttonContainer flex flex-row justify-center items-center font-netflix text-mheadline2 bg-[#E50914]'> */}
            {!user&& <button className=' pt-10 buttonContainer-2 flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'>
              Get Started
              <img src={SignupArrow} alt="signup-icon" className='arrow-icon'/>
            </button>}

            {user&& <button type='button' onClick={completeSignUp} className=' pt-10 buttonContainer-2 !max-w-[250px] flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'>
              Finish Sign-Up
              <img src={SignupArrow} alt="signup-icon" className='arrow-icon'/>
            </button>}
          {/* </div> */}
        
      </form>
    </div>

  )
}
