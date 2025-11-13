// import { useState } from "react"
import sideControl from "../assets/landingPage/Signup Arrow.svg" 

export default function SideBarControl({ setIsAnimating, variant, setShow }) {

    const handleMotion = () => {
        setIsAnimating((prevAnimating) => !prevAnimating)
        setShow((prevShow) => !prevShow)
    }
        

  return (
     <div className={`bg-[black] absolute top-[48.5px] w-[47px] h-[290px] flex justify-center items-center ${variant ==='leftHand' ?  'left-[-37px] rotate-180 z-[1000]' : 'right-[-37px]' }`}> 
        <div onClick={handleMotion} className=' h-[120px] w-[24px] bg-[#232323] rounded-[8px] flex justify-self-end justify-center items-center cursor-pointer hover:bg-[#2D2D2D]'> 
            <img src={sideControl} alt=""/>
        </div>
    </div>
  )
}
