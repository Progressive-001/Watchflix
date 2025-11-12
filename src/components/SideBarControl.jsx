import React from 'react'
import sideControl from "../assets/landingPage/Signup Arrow.svg" 

export default function SideBarControl() {
  return (
    <div className='relative bg-[red] w-[100%] h-[100%] flex justify-center  items-center'>
    {/* <div className='bg-[red] absolute right-[-35px] top-[150px] w-[45px] h-full'> */}
        {/* <div className=' h-[120px] w-[24px] bg-[#232323] rounded-[8px] flex justify-self-end justify-center items-center mr-1'> */}
        <div className=' h-[120px] w-[24px] bg-[#232323] rounded-[8px] flex justify-self-end justify-center items-center '>
            <img src={sideControl} alt="" />
        </div>
    </div>
  )
}
