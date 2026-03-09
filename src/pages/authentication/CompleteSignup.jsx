//Hooks
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCompleteForm } from '../../hooks/useCompleteForm'
// eslint-disable-next-line no-unused-vars
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

//Component
import FooterAuthPage from "../../components/footers/FooterAuthPage";

//Asset
import { LogoIcon, CircleErr} from '../../components/Icons/Icons'

export default function CompleteSignup() {

    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null)
    const { error, loading, handleForm } = useCompleteForm()
    const { user } = useAuthContext();
    const query = useQuery();
    const steps = query.get('step');
    const destination = query.get('destination');
     
    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected);

        if(!selected){
            setThumbnailError("Please select a file")
            return
        }
        if(!selected.type.includes("image")){
            setThumbnailError("Selected file must be an image")
            return
        }
        if(selected.size > 300000) {
            setThumbnailError("Image file size must be less than 200kb")
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log("thumbnail updated", thumbnail);
        
    }

    const handleNext = async (e) => {
        e.preventDefault()
        await handleForm({ thumbnail, displayName })
        console.log(error);
    }

    

  return (
    <div className="  text-[#000000B3] bg-[#FFFFFF] w-full flex flex-col justify-center items-center z-[9999] gap-[50px] overflow-x-hidden h-[100vh]">
        <div className=" w-full flex flex-col justify-center mt-[10px] items-center gap-[20px]">

            <div className="flex justify-between items-center w-full ">
                <NavLink to="/" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px]'>
                    <LogoIcon  className=''/>
                </NavLink>

                <NavLink to="/login" className='z-[9999] mb-[0px] mt-[20px] mx-[100px] w-[120px] no-underline font-bold'>
                    <span>{user ? "Sign Out" : "Sign In" }</span>
                </NavLink>
            </div>
          
          <hr className="w-full"/>
      </div>
       

        <div className='text-[black] h-[100%] flex flex-col justify-center items-center gap-[40px] font-netflix '>

            <div className="flex flex-col gap-[20px] w-full max-w-[480px]">

                <div className="py-[10px] text-left w-full max-w-[400px]">
                    <span className="font-normal text-gray-700">STEP {steps} OF {destination}</span>
                    <h1 className="font-medium text-mlargeTitle pb-[20px]">Provide your name and profile picture</h1>
                    <p>Just a few more steps and you're done!</p>
                    <p>We hate paperwork, too.</p>
                </div>

                <form onSubmit={handleNext}>

                    <div className=" flex flex-col gap-[15px] font-medium mb-[15px]">
                        <input
                            type="text"
                            placeholder='displayName'
                            // required
                            value={displayName}
                            onChange={e => {setDisplayName(e.target.value);}}
                            className={`login-container !bg-transparent`} 
                        />

                        <input
                            required
                            type="file"
                            placeholder='Profile thumbnail'
                            onChange={handleFileChange}
                            className={`login-container !bg-transparent`} 
                        />

                        <LazyMotion features={domAnimation}>
                            <AnimatePresence>
                                {thumbnailError && 
                                    <m.div
                                        key="error-motion"
                                        className='text-red-600 text-left flex gap-3'
                                        initial={{ opacity: 0, x: 0}}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 0}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <CircleErr className='w-[20px]' /> {thumbnailError}
                                    </m.div>
                                }
                            </AnimatePresence>
                        </LazyMotion>
                    </div>
                    
                    <div className="font-bold">
                        <button disabled={loading}  className="text-[white] w-full py-[15px] buttonSign flex justify-center items-center font-netflix bg-[#E50914] font-medium text-mtitle3">
                            {loading ? "Loading..." : "Next" }
                        </button>
                    </div>

                </form>
            </div>
          
        </div>

      <FooterAuthPage variant={'light'}/>
    </div>
  )
}
