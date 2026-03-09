//Hooks
// import { useState } from "react"
import { useSignup } from "../../hooks/useSignup";
import { NavLink, useHistory } from 'react-router-dom'
import FooterAuthPage from "../../components/footers/FooterAuthPage";
import { useQuery } from "../../hooks/useQuery";

//Components

//Assets
import messageIcon from '../../assets/Messgae-Icon.png'
import { LogoIcon } from '../../components/Icons/Icons.jsx'


export default function SignupOpt() {
    const { isPending, signupEmail } = useSignup()
    const history = useHistory()
    const query = useQuery();
    const steps = query.get('step');
    const destination = query.get('destination');


    const goTOSignup = () => {
        history.push('/signup?step=1&destination=2')
    }

  return (
    <div className="  text-[#000000B3] bg-[#FFFFFF] w-full flex flex-col justify-center items-center z-[9999] gap-[50px] overflow-x-hidden h-[100vh]">
        {/* <h1>{message}</h1> */}
        <div className=" w-full flex flex-col justify-center mt-[10px] items-center gap-[20px]">

            <div className="flex justify-between items-center w-full ">
                <NavLink to="/" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px]'>
                    <LogoIcon className=''/>
                </NavLink>

                <NavLink to="/SignIn" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px] no-underline font-bold'>
                    <span>Sign In</span>
                </NavLink>
            </div>
            

            {/* <Header /> */}
            <hr className="w-full"/>
        </div>
       

        <div className='text-[black] h-[100%] flex flex-col justify-center items-center gap-[40px] '>

            <div>
                <img src={messageIcon} alt="" className='w-[90px]'/>
            </div>

            <div className="flex flex-col gap-[20px]">
                <div className="py-[10px]">
                    <span className="font-normal text-gray-700">STEP {steps} OF {destination}</span>
                    <h1 className="font-bold text-mtitle2 pb-[20px]">Check your inbox</h1>
                    <p>We sent a sign-up link to <span className="font-bold">{localStorage.getItem('emailForSignIn')}</span></p>
                    <p>Tap the link in the email to finish setting up your account</p>
                </div>
              
                <div className=" flex flex-col gap-[10px] font-bold">
                    <button disabled={isPending} onClick={() => signupEmail(localStorage.getItem('emailForSignIn'))}  className="text-[white] w-full py-[8px] buttonSign flex justify-center items-center font-netflix bg-[#E50914] font-medium text-body">
                        {isPending ? "Loading..." : "Resend Link" }
                    </button>
                    <button type="button" onClick={goTOSignup} className=' py-[8px] buttonSign flex flex-row justify-center items-center font-netflix bg-[rgba(0,0,0,0.2)] font-medium text-body'>Create Password Instead</button>
                </div>
                
            </div>
            
        </div>

        <FooterAuthPage variant={'light'}/>
    </div>
  )
}
