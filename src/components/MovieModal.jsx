// import React from 'react'
import { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'

import closeIcon from "/src/assets/landingPage/Cross.svg";
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

export default function MovieModal() {
    const {isLoading, popular} = useContext(MovieContext);
    const[isModal, setIsModal] = useState(false);
    console.log(popular);
    

  return (

        <div>

            {popular.map((pop, index)=>

                <div>
                    <div>
                        <img src={closeIcon} alt="" />
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <h1></h1>
                        <div>
                            <span></span>
                        </div>
                        <p></p>
                        <button className='buttonContainer-1 flex flex-row justify-center items-center w-full max-w-[858px] font-netflix bg-[#E50914] font-bold text-smallbody lg:hidden'>
                            Get Started
                            <img src={SignupArrow} alt="" />
                        </button>
                    </div>

                </div>
            
            )}
            
        </div>
    )
}
