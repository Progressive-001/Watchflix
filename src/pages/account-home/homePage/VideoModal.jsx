//Hooks
// eslint-disable-next-line no-unused-vars
import { m, domAnimation, LazyMotion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../../context/MovieContext'
import Skeleton from '@mui/joy/Skeleton'


//styles
import './VideoModal.css'

//assets
import closeIcon from "/src/assets/landingPage/Cross.svg";
import { PlayIcon } from '../../../components/Icons/Icons.jsx'
import YouTubePlayer from '../../../utils/YoutubePlayer'
import { useMovies } from '../../../hooks/useMovies'


export default function VideoModal({movie, index, isOpen, onClose, isLoading, shuffleMovies, handleClick}) {
    const { genreRes } = useContext(MovieContext);
    const { fetchMovieVideos } = useMovies()
    const [trailerKey, setTrailerKey] = useState(null);
    const [opacity, setOpacity] = useState(0); 
    const [step, setStep] = useState('image');

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


    useEffect(() => {

        let timer;
        if (isOpen) {
            if (step === 'image') {
                timer = setTimeout(() => { setStep('video') }, 3000)
            }
        }
        return () => clearTimeout(timer);
    }, [step, isOpen])


    let genreNames = [];
    let ageRating = '';

    if(isOpen && movie){
        genreRes.forEach(genre => {
            if(movie.genre_ids?.includes(genre.id)){
                genreNames.push(genre.name);
            }
        })
        if(movie.adult == false){
            ageRating = '18+'
        }else{
            ageRating = 'No need for parental guardian'
        }
    }
    
    const showSkeleton = isLoading || !movie;
    const heroMovieId = movie?.id

    // Robust Trailer Fetching
    useEffect(() => {
        if (!isOpen || !heroMovieId) return;

        const loadTrailer = async () => {
            try {
                const data = await fetchMovieVideos(heroMovieId);
                
                let key = null;
                // Handle different API response structures
                if (data?.key) {
                    key = data.key;
                } 
                else if (Array.isArray(data)) {
                    key = data.find(v => v.site === "YouTube" && v.type === "Trailer")?.key;
                }
                else if (data?.results) {
                    key = data.results.find(v => v.site === "YouTube" && v.type === "Trailer")?.key;
                }

                setTrailerKey(key);
            } catch (error) {
                console.error("Error loading trailer in modal:", error);
            }
        };

        loadTrailer();
    }, [heroMovieId, isOpen]);


  return (
        <div className='z-[9999]'>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {isOpen && (
                        <div onClick={onClose} key={`modal-${index}`} className=' w-full h-full bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999]  ' >
                                <m.div 
                                    key="modal-motion"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100}}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    onClick={(e)=> e.stopPropagation()} 
                                    className='rounded-[8px] mx-[20px] w-full max-w-[650px] h-full max-h-[780px] flex flex-col gap-[16px] bg-[#161616] border-[1px] border-gray-600'
                                >
                                    <button onClick={onClose} className=' closeButton z-[9999] hover:bg-[#161616] absolute rounded-full translate-x-[36rem] translate-y-6 p-2'>
                                        <img src={closeIcon} alt="" className='z-[9999]'/>
                                    </button>

                                    {/* Video Container */}
                                    <div className='relative w-full overflow-hidden bg-black'>
                                        { !showSkeleton ? (
                                            <>
                                               

                                                {/* Image shows if we are in image step OR if there is no trailer key */}
                                                { (step === 'image' || !trailerKey || opacity === 0 ) && (
                                                    <>
                                                    <img 
                                                        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} 
                                                        alt={movie?.title} 
                                                        className=' inset-0 w-full h-full object-cover opacity-50'
                                                    />


                                                    <button onClick={() => setOpacity(1)} className='flex gap-[10px] bg-white text-black px-[20px] py-[10px] rounded-[2px] font-bold'>
                                                        <PlayIcon className='' />
                                                        Play
                                                    </button>
                                                   </> 
                                                )}
                                                
                                                
                                
                                                {/* YouTube Player */}
                                                {/* We do NOT pass isPlaying. undefined = AutoPlay (Priority 3 in our logic) */}
                                                { trailerKey && step === 'video' && (
                                                    <div className="w-full m-w[480px] h-[50vh] z-20">
                                                        <YouTubePlayer videoId={trailerKey}  opacity={opacity} variant={'container'} setOpacity={setOpacity}/>
                                                    </div>
                                                )}   
                                              
                                            </>
                                        ) : (  
                                            <Skeleton animation="wave" variant="rectangular" className="!w-full !h-[50vh] !bg-[#202020]" />
                                        )}

                                        <div className='cover w-full h-full'></div>
                                        <div className='cover1 w-full h-full'></div>
                                    </div>

                                    <div className='flex flex-col gap-[30px] items-start font-san font-normal text-msmallbody pt-[100px] w-full'>
                                        <h1 className=' absolute -translate-y-24 text-left tracking-wide px-[30px] text-btitle1 font-bebas w-[680px]'>{movie.title}</h1>
                                        <div className='flex gap-[10px] px-[30px] py-[5px] font-medium pt-[50px]'>
                                            <span className='bg-[#414141] rounded-[0.25rem]  py-[0.5rem] px-[0.5rem]'>{new Date(movie.release_date).getFullYear()}</span>
                                            <span className='bg-[#414141] rounded-[0.25rem]  py-[0.5rem] px-[0.5rem]'>{ageRating}</span>
                                            {genreNames.map((name, i) => (<span key={i} className='bg-[#414141] rounded-[0.25rem] py-[0.5rem] px-[0.5rem]'>{name}</span>))}
                                        </div>
                                        <p className='text-justify px-[30px] pb-[40px]'>{movie.overview}</p>
                                    </div>
                                </m.div>
                        </div>
                    )}
                </AnimatePresence>
            </LazyMotion>

        </div>
  )
}