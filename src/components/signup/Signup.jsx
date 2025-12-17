//Hooks
import { useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
import { useFinishSignUp } from '../../hooks/useFinishSignUp'


//assets
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

//styles
import './signup.css'

export default function Signup1() {
  const [email, setEmail] = useState('')
  const { emailError, isPending, signupEmail } = useSignup();
  const { completeSignUp, user, history} = useFinishSignUp();


  const handleSubmit =  async (e) => {
    e.preventDefault()

    // Schedule the check and redirect to run after 3 seconds
    if (email === "") {
      console.log('Please input your email');
      document.getElementsByClassName('input-container')[0].style.borderColor  = 'red';

    } else {
      await signupEmail(email)
      setTimeout(history.push("/signup-option"), 3000)
      document.getElementsByClassName('input-container')[0].style.borderColor  = 'green';

    }
  }


  return (

    <div className='flex flex-col gap-[20px]'>

      <p className='font-normal text-body leading-[24px] '>Ready to watch? Enter your email to create or restart your membership.</p> 

      <form onSubmit={handleSubmit} 
        className='signup-container flex flex-col lg:flex-row md:flex-row justify-center items-center gap-[10px]'>

          <input
            type="email"
            placeholder='Email address'
            // required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`input-container ${user&& 'hidden'}`}
          />
          
          {/* <div className='buttonContainer flex flex-row justify-center items-center font-netflix text-mheadline2 bg-[#E50914]'> */}
            {!user&& (<button 
              // onClick={() => setTimeout(completeSignUp, 2000)} 
              className= {isPending ? 'pt-10 buttonContainer flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1 opacity-50':'pt-10 buttonContainer flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'} 
              disabled={isPending}
            >
              {isPending ? "Loading..." : <><p>Get Started</p> <img src={SignupArrow} alt="signup-icon" className='arrow-icon'/></>}
            </button>)}

            {user && 
              <button
                type='button' 
                onClick={completeSignUp} 
                className= {'pt-10 buttonContainer !max-w-[250px] flex flex-row justify-center items-center font-netflix bg-[#E50914] font-bold text-mheadline1'} 
              >
                <p>Finish Sign-UP</p> <img src={SignupArrow} alt="signup-icon" className='arrow-icon'/>
              </button>
            }
          {/* </div> */}
        
      </form>
    </div>

  )
  
}