//Hooks
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react'
import { MovieContext } from '../context/MovieContext'

//styles
import './MovieModal.css'

//assets
import closeIcon from "/src/assets/landingPage/Cross.svg";
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

export default function MovieModal({pop, index, isOpen, onClose}) {
    const { genreRes} = useContext(MovieContext);

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
            document.body.style.overflowX = 'hidden';
        }

        return ()=>{
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    let genreNames = [];

    if(isOpen){
        console.log(pop.genre_ids);
        genreRes.map(genre => {
            if(pop.genre_ids.includes(genre.id)){
                genreNames.push(genre.name)
            }
        })
    }

  return (
        <div className='z-[9999]'>
            {isOpen && (
                <div onClick={onClose} key={`modal-${index}`} className=' w-full h-full bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999] ' >
                    <motion.div 
                        key="sidebar-motion"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0}}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        onClick={(e)=> e.stopPropagation()} className='rounded-[8px] mx-[20px] w-full max-w-[650px]  flex flex-col gap-[16px] bg-[#161616] border-[1px] border-gray-600'
                    >
                        <button onClick={onClose} className='closeButton hover:bg-[#161616] absolute rounded-full translate-x-[36rem] translate-y-6 p-2'>
                            <img src={closeIcon} alt="" className=''/>
                        </button>

                        <div className='relative'>
                            <img src={`https://image.tmdb.org/t/p/w500${pop.backdrop_path}`} alt="" className='object-cover rounded-[8px] w-full h-full min-h-[380px]'/>
                            <div className='cover w-full h-full'></div>
                            <div className='cover1 w-full h-full'></div>
                        </div>

                        <div className='flex flex-col gap-[30px] items-start font-san font-normal text-msmallbody '>
                            <h1 className='absolute -translate-y-24 tracking-wide px-[30px] text-blargeTitle font-bebas'>{pop.title}</h1>
                            <div className='flex gap-[20px] px-[30px] py-[5px] font-medium'>
                                <span className='bg-[#414141] rounded-[0.25rem]  py-[0.5rem] px-[0.5rem]'>{new Date(pop.release_date).getFullYear()}</span>
                                {genreNames.map((name, i) => (<span key={i} className='bg-[#414141] rounded-[0.25rem] py-[0.5rem] px-[0.5rem]'>{name}</span>))}
                            </div>
                            <p className='text-justify px-[30px]'>{pop.overview}</p>
                            <button className='buttonContainer-3 flex flex-row justify-center items-center h-[48px] w-full max-w-[156px] font-netflix bg-[#E50914] font-normal text-body'>
                                Get Started
                                <img src={SignupArrow} alt="" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
  )
}