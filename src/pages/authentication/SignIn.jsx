//Hooks
import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useSignIn } from '../../hooks/useSignIn'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import Checkbox from '@mui/joy/Checkbox';
import { styled } from "@mui/joy/styles";

//assets
import heroImage2 from '../../assets/landingPage/Hero-Image-2.webp'
import HeroImage from '../../assets/landingPage/Wordmark.svg'

//components
import FooterAuthPage from '../../components/footers/FooterAuthPage'

//styles
import './SignIn.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [signEmail, setSignEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [rememberPassword, setRememberPassword] = useState('')

    const [signPassword, setSignPassword] = useState(true)

    const [forgetPassword, setForgetPassword] = useState('Forgot password?')

    const [signWithCode, setSignWithCode] = useState('Use a Sign-In Code')
    const [signIn, setSignIn] = useState('Sign In')
    const { error, isPending, emailError, logIn, signupEmail } = useSignIn()

    const handleLoginOption = () => {
        setForgetPassword(!signPassword ? 'Forgot password?' : 'Forgot Email or Phone Number?')
        setSignWithCode(!signPassword ? 'Use a Sign-In Code' : 'Sign in with Password')
        setSignIn(!signPassword ? 'Sign In' : 'Send Sign-In Code')
        setSignPassword(!signPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        console.log(signEmail)

        if (signPassword){
           await logIn(email, password)
            setSignEmail('')
            console.log(email, password, "isPending:", isPending)


        } else{
           await signupEmail(signEmail)
            setEmail('')
            setPassword('')
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     if (signPassword) {
    //         await signup(email, password)
    //         setSignEmail('')
    //     } else {
    //         await signupEmail(signEmail)
    //         setEmail('')
    //         setPassword('')
    //     }
    // }


    const MyCheckbox = styled(Checkbox)(() => ({
        // unchecked background
        "& .MuiCheckbox-checkbox, & .JoyCheckbox-checkbox": {
            backgroundColor: "black", // <-- unchecked background
            border: "1px solid gray",
        },

        // checked background
        "&.Mui-checked .MuiCheckbox-checkbox, &.Mui-checked .JoyCheckbox-checkbox": {
            backgroundColor: "white", // <-- checked background
            borderColor: "gray",
        },

        // the check mark ✓ color
        "& .MuiCheckbox-indicator, & .JoyCheckbox-indicator": {
            color: "black", // check icon color when checked
        },
    }));

  return (

    <AnimatePresence>
        <motion.div 
            className='login-details relative flex flex-col justify-center items-center p-[0px] z-[9999] gap-[0px] overflow-x-hidden'
            key="modal-motion"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0}}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >

            <NavLink to="/" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px] self-start '>
                <img src={HeroImage} alt="" className=''/>
            </NavLink>
            
            <div>
                <div className='bg-image'>
                    <img src={heroImage2} alt='' className='loginImage'/>
                    <div className='overLay'></div>
                </div>

                <div className='signContainer flex flex-col justify-center items-center z-[999] w-full h-full min-w-[480px] min-h-[709px] translate-y-[0%] translate-x-[0%]'>
        
                    <h1 className='font-bold text-mlargeTitle text-left self-start mb-[10px]'>Sign In</h1> 
            
                    <form onSubmit={handleSubmit} 
                        className=' flex flex-col justify-center items-center gap-[15px] w-full font-netflix'>
                
                        {signPassword&&   

                            <>
                                <input
                                    type="email"
                                    placeholder='Email or mobile number'
                                    // required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className='login-container'
                                />
                                <AnimatePresence>
                                    {error&& 
                                        <motion.p
                                            key="error-motion"
                                            className='text-red-700'
                                            initial={{ opacity: 0, x: 0}}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 0}}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            {error}
                                        </motion.p>
                                    }
                                </AnimatePresence>

                                <input
                                    type="password"
                                    placeholder='Password'
                                    // required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className='login-container'
                                />
                                <AnimatePresence>
                                    {error&& 
                                        <motion.p
                                            key="error-motion"
                                            className='text-red-700'
                                            initial={{ opacity: 0, x: 0}}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 0}}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            {error}
                                        </motion.p>
                                    }
                                </AnimatePresence>
                            </>
                                
                        }

                        {!signPassword&& 
                            <>
                                <input
                                    type="email"
                                    placeholder='Email or mobile number'
                                    // required
                                    value={signEmail}
                                    onChange={e => setSignEmail(e.target.value)}
                                    className='login-container'
                                />
                                <AnimatePresence>
                                    {error&& 
                                        <motion.p
                                            key="error-motion"
                                            className='text-red-700'
                                            initial={{ opacity: 0, x: 0}}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 0}}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            {emailError}
                                        </motion.p>
                                    }
                                </AnimatePresence>
                            </>
                        
                        }
                        
                        {/* {!isPending ? ( 
                            <button className='w-full py-[8px] buttonSign flex flex-row justify-center items-center font-netflix bg-[#E50914] font-medium text-body'>{signIn}</button>
                            ) : (<button className='w-full py-[8px] buttonSign flex flex-row justify-center items-center font-netflix bg-[#E50914] font-medium text-body' disabled>loading...</button>
                            )
                        } */}

                        <button
                            className="w-full py-[8px] buttonSign flex justify-center items-center font-netflix bg-[#E50914] font-medium text-body"
                            disabled={isPending}
                            >
                            {isPending ? "Loading..." : signIn}
                        </button>

                        <span className='w-full my-[5px] text-[#B3B3B3]'>OR</span>

                        <button disabled type="button" onClick={handleLoginOption} className=' py-[8px] buttonSign flex flex-row justify-center items-center font-netflix bg-[rgb(51,51,51,0.8)] font-medium text-body'>
                            {signWithCode}
                        </button>

                        <NavLink to="/loginHelp" className=' font-netflix text-body font-medium flex justify-self-start place-items-start'>{forgetPassword}</NavLink>

                        <div className='self-start mt-[10px] flex flex-row gap-[10px] items-center z-[9999]'>

                            <MyCheckbox variant="outlined" defaultChecked />
                        
                            <label className='font-netflix text-body'>Remember me</label>
                        </div>

                        <span className='mt-[10px] self-start text-left text-[rgba(255,255,255,0.7)]'>New to Watchflix?<NavLink to="/" className="text-[rgb(68,142,244)]"> Sign up now.</NavLink> </span>

                        <span className='mt-[10px] text-left text-mcaption1 text-[rgba(255,255,255,0.7)]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <NavLink to="/faq" className="text-[rgb(68,142,244)]">Learn more.</NavLink> </span>
                        
                    </form>

                </div>

            </div>

            <FooterAuthPage />

        </motion.div>
    </AnimatePresence>
    

  )
}
