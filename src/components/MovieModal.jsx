//Hooks
// eslint-disable-next-line no-unused-vars
import { m, domAnimation, LazyMotion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { useFinishSignUp } from '../hooks/useFinishSignUp'
import Skeleton from '@mui/joy/Skeleton'


//styles
import './MovieModal.css'

//assets
import closeIcon from "/src/assets/landingPage/Cross.svg";
import SignupArrow from '/src/assets/landingPage/Signup Arrow.svg'

export default function MovieModal({movie, index, isOpen, onClose, isLoading, priority, popular}) {
    const { genreRes} = useContext(MovieContext);
    const { completeSignUp, user } = useFinishSignUp();
    // const [ isModalLoading, setIsModalLoading ] = useState(false);

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

    const scrollToPage = () => {
        const element = document.getElementById('landingPage');
        element?.scrollIntoView({ behavior: 'smooth'})
    }               

    let genreNames = [];
    let ageRating = '';

    if(isOpen && movie){
        genreRes.forEach(genre => {
            if(movie.genre_ids?.includes(genre.id)){
                genreNames.push(genre.name)
            }
        })
        if(movie.adult === false){
            ageRating = '18+'
        }else{
            ageRating = 'PG'
        }
    }
    const showSkeleton = isLoading  || !popular || popular.length === 0;

  return (
        <div className='z-[9999]'>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {isOpen && (
                        <div onClick={onClose} key={`modal-${index}`} className=' w-full h-[100%] bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999] ' >
                                <m.div 
                                    key="modal-motion"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100}}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    onClick={(e)=> e.stopPropagation()} className='rounded-[8px] mx-[20px] w-full max-w-[650px]  flex flex-col gap-[16px] bg-[#161616] border-[1px] border-gray-600'
                                >
                                    <button onClick={onClose} className='closeButton hover:bg-[#161616] absolute rounded-full translate-x-[36rem] translate-y-6 p-2'>
                                        <img src={closeIcon} alt="" className=''/>
                                    </button>

                                    <div className='relative'>
                                        { showSkeleton ? (
                                           <Skeleton animation="wave" variant="rectangular" className="!rounded-[8px] !bg-[rgb(206,50,50)] !relative" >
                                                <img
                                                    alt=""
                                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                    className="object-cover h-full min-w-[380px]"
                                                />
                                            </Skeleton>
                                        ) : (  
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} 
                                                alt={movie?.title || ''} 
                                                className='object-cover rounded-[8px] w-full h-full min-h-[380px]'
                                                fetchpriority={priority ? 'high' : 'low'}
                                                loading={priority ? 'eager' : 'lazy'}
                                                width="1280" 
                                                height="720" 
                                            />

                                           
                                        ) }
                                        <div className='cover w-full h-full'></div>
                                        <div className='cover1 w-full h-full'></div>
                                    </div>

                                    <div className='flex flex-col gap-[30px] items-start font-san font-normal text-msmallbody '>
                                        <h1 className=' absolute -translate-y-24 text-left tracking-wide px-[30px] text-btitle1 font-bebas'>{movie?.title}</h1>
                                        <div className='flex gap-[10px] px-[30px] py-[5px] font-medium'>
                                            <span className='bg-[#414141] rounded-[0.25rem]  py-[0.5rem] px-[0.5rem]'>{new Date(movie?.release_date).getFullYear()}</span>
                                            <span className='bg-[#414141] rounded-[0.25rem]  py-[0.5rem] px-[0.5rem]'>{ageRating}</span>
                                            {genreNames.map((name, i) => (<span key={i} className='bg-[#414141] rounded-[0.25rem] py-[0.5rem] px-[0.5rem]'>{name}</span>))}
                                        </div>
                                        <p className='text-justify px-[30px]'>{movie?.overview}</p>

                                        <button onClick={() => {scrollToPage(); onClose(); {user && completeSignUp()}}} className={`${user&& 'max-w-[200px]'} buttonContainer-3 flex flex-row justify-center items-center h-[48px] w-full max-w-[156px] font-netflix bg-[#E50914] font-normal text-body`}>
                                            {user ? "Finish Sign-Up" : "Get Started"}
                                            <img src={SignupArrow} alt="" />
                                        </button>
                                    </div>
                                </m.div>
                        </div>
                    )}
                </AnimatePresence>
            </LazyMotion>

        </div>
  )
}