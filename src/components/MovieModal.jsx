// import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import './MovieModal.css'

import closeIcon from "/src/assets/landingPage/Cross.svg";
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

export default function MovieModal({pop, index, isOpen, onClose}) {
    const { popular} = useContext(MovieContext);

    console.log(popular);

  return (

        <div className='z-[9999]'>

            {isOpen && 
                <div onClick={onClose} key={`modal-${index}`} className=' w-full h-full bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999] ' >
                    <div onClick={(e)=> e.stopPropagation()} className='rounded-[8px] mx-[20px] w-full max-w-[650px]  flex flex-col gap-[16px] bg-[#161616] border-[1px] border-gray-600'>
                        <button onClick={onClose} className='closeButton hover:bg-[#161616] absolute rounded-full translate-x-[36rem] translate-y-6 p-2'>
                            <img src={closeIcon} alt="" className=''/>
                        </button>

                        <div className='relative'>
                            <img src={`https://image.tmdb.org/t/p/w500${pop.backdrop_path}`} alt="" className='object-cover rounded-[8px] w-full h-full min-h-[380px]'/>
                            <div className='cover w-full h-full'></div>
                            <div className='cover1 w-full h-full'></div>
                        </div>

                        <div className='flex flex-col gap-[40px] items-start font-san font-normal text-msmallbody '>
                            <h1 className='absolute -translate-y-24 tracking-wide px-[30px] text-blargeTitle font-bebas'>{pop.title}</h1>
                            {/* <div>
                                <span>{pop.genre}</span>
                            </div> */}
                            <p className='text-justify px-[30px] pt-[30px]'>{pop.overview}</p>
                            <button className='buttonContainer-3 flex flex-row justify-center items-center h-[48px] w-full max-w-[156px] font-netflix bg-[#E50914] font-normal text-body'>
                                Get Started
                                <img src={SignupArrow} alt="" />
                            </button>
                        </div>
                    </div>
                    

                </div>}
            
        </div>
      )}
    </div>
  )
}


// {isOpen && (
//         <div onClick={onClose} key={`modal-${index}`} className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]">
//           <div onClick={(e) => e.stopPropagation()} className="bg-black rounded-lg p-8 max-w-2xl relative">
//             {/* Close Button */}
//             <button onClick={onClose} className="absolute top-4 right-4">
//               <img src={closeIcon} alt="close" className="w-6 h-6" />
//             </button>

//             {/* Backdrop Image */}
//             <div className="mb-4">
//               <img src={`https://image.tmdb.org/t/p/w500${pop.backdrop_path}`} alt={pop.title} className="w-full rounded-lg" />
//             </div>

//             {/* Content */}
//             <div>
//               <h1 className="text-2xl font-bold text-white mb-2">{pop.title}</h1>
//               <div className="mb-4">
//                 <span className="text-gray-400">{pop.release_date}</span>
//               </div>
//               <p className="text-gray-300 mb-6">{pop.overview}</p>
//               <button className='buttonContainer-1 flex flex-row justify-center items-center w-full max-w-[858px] font-netflix bg-[#E50914] font-bold text-smallbody'>
//                 Get Started
//                 <img src={SignupArrow} alt="" className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
    //   )}