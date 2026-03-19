//Hooks
// eslint-disable-next-line no-unused-vars
import { m, domAnimation, LazyMotion, AnimatePresence } from 'framer-motion'
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { useSignup } from "../../hooks/useSignup";
import { useSignout } from '../../hooks/useSignout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';


//Component
import FooterAuthPage from "../../components/footers/FooterAuthPage";

//Asset
import { CircleErr, LogoIcon } from '../../components/Icons/Icons.jsx'

// Style
import './SignIn.css'



export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, signup } = useSignup()
  const { logOut } = useSignout()
  const { user } = useAuthContext()
  const [ isEmailValid, setIsEmailValid ] = useState(null)
  const [ isPasswordValid, setIsPasswordValid ] = useState(null)
  // const history = useHistory()
  const query = useQuery();
  const steps = query.get('step');
  const destination = query.get('destination');
  

  const handleSubmit =  async (e) => {
    e.preventDefault()
    await signup(email, password, setIsEmailValid, setIsPasswordValid)
    // await setTimeout(() => history.push('/authentication/complete-signup?step=2&destination=2'), 1000)
    console.log(email, error, password, "isPending:", isPending)
  }

  const validateEmail = (email) => {
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(email))
  }

  const validatePassword = (password) => {
    setIsPasswordValid(password.length >= 6)
  }


  return (
    <div className="  text-[#000000B3] bg-[#FFFFFF] w-full flex flex-col justify-center items-center z-[9999] gap-[50px] overflow-x-hidden h-[100vh]">
      <div className=" w-full flex flex-col justify-center mt-[10px] items-center gap-[20px]">

          <div className="flex justify-between items-center w-full ">
              <NavLink to="/" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px]'>
                  <LogoIcon className=''/>
              </NavLink>

              <NavLink to="/SignIn" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px] no-underline font-bold'>
                {user ? <button onClick={() => setTimeout(2000, logOut())}>Sign Out</button> : <button>Sign In</button>}
              </NavLink>
          </div>
          
          <hr className="w-full"/>
      </div>
       

      <div className='text-[black] h-[100%] flex flex-col justify-center items-center gap-[40px] font-netflix '>

        <div className="flex flex-col gap-[20px] w-full max-w-[480px]">

          <div className="py-[10px] text-left w-full max-w-[400px]">
            <span className="font-normal text-gray-700">STEP {steps} OF {destination}</span>
            <h1 className="font-medium text-mlargeTitle pb-[20px]">Create a Password to start your membership</h1>
            <p>Just a few more steps and you're done!</p>
            <p>We hate paperwork, too.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className=" flex flex-col gap-[15px] font-medium mb-[15px]">
              <input
                type="email"
                placeholder='Email'
                // required
                value={email}
                onChange={e => {setEmail(e.target.value); validateEmail(e.target.value);}}
                className={`login-container !bg-transparent ${isEmailValid === true ? '!border-green-600' : isEmailValid === false ? '!border-red-600' : " "}`} 
              />
              {/* <AnimatePresence>
                {error &&
                    <motion.p
                        key="error-motion"
                        className='text-red-700 text-left'
                        initial={{ opacity: 0, x: 0}}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0}}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {error}
                    </motion.p>
                }
              </AnimatePresence> */}

              <input
                type="password"
                placeholder='Add a password'
                // required
                value={password}
                onChange={e => {setPassword(e.target.value); validatePassword(e.target.value)}}
                className={`login-container !bg-transparent ${isPasswordValid === true ? '!border-green-600' : isPasswordValid === false ? '!border-red-600' : " "}`} 

              />
              <LazyMotion features={domAnimation}>
                <AnimatePresence>
                  {error && 
                    <m.div
                      key="error-motion"
                      className='text-red-600 text-left flex gap-3'
                      initial={{ opacity: 0, x: 0}}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0}}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <CircleErr className='w-[20px]' /> {error}
                    </m.div>
                  }
                </AnimatePresence>
              </LazyMotion>
             

            </div>
            
            <div className="font-bold">
              <button disabled={isPending}  className="text-[white] w-full py-[15px] buttonSign flex justify-center items-center font-netflix bg-[#E50914] font-medium text-mtitle3">
                {isPending ? "Loading..." : "Next" }</button>
            </div>

          </form>

          
              
        </div>
          
      </div>

      <FooterAuthPage variant={'light'}/>
    </div>
  )
}
