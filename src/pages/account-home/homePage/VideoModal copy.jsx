// Hooks
// eslint-disable-next-line no-unused-vars
import { m, domAnimation, LazyMotion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../../context/MovieContext'
import Skeleton from '@mui/joy/Skeleton'

//styles
import './VideoModal.css'

//assets
import closeIcon from "/src/assets/landingPage/Cross.svg";
import YouTubePlayer from '../../../utils/YoutubePlayer'


export default function VideoModal({movie, index, isOpen, onClose, isLoading, shuffleMovies, handleClick}) {
    const { genreRes, fetchMovieVideos} = useContext(MovieContext);
    const [trailerKey, setTrailerKey] = useState(null);

    // 1. Lock Body Scroll when Modal is Open
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
            document.body.style.overflowX = 'hidden';
            setTrailerKey(null); // Reset video when closed
        }
        return ()=>{
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // 2. Genre Logic
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

    const showSkeleton = isLoading || !movie;
    const heroMovieId = movie?.id

    // 3. FIXED: Robust Trailer Fetching
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
        <div className='z-[99999]'>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {isOpen && (
                        <div onClick={onClose} key={`modal-${index}`} className='fixed inset-0 w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4' >
                                <m.div 
                                    key="modal-motion"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    onClick={(e)=> e.stopPropagation()} 
                                    className='relative rounded-[8px] w-full max-w-[800px] flex flex-col gap-[16px] bg-[#181818] border border-gray-700 overflow-hidden shadow-2xl'
                                >
                                    
                                    {/* Close Button */}
                                    <button onClick={onClose} className='absolute top-4 right-4 z-[99999] bg-[#181818]/50 rounded-full p-2 hover:bg-white/20 transition'>
                                        <img src={closeIcon} alt="Close" className='w-6 h-6'/>
                                    </button>

                                    {/* Video Container */}
                                    <div className='relative w-full aspect-video bg-black'>
                                        { !showSkeleton ? (
                                             <>
                                                {/* Fallback Image */}
                                                <img 
                                                    src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`} 
                                                    alt={movie?.title} 
                                                    className='absolute inset-0 w-full h-full object-cover opacity-50'
                                                />
                                                
                                                {/* 4. YouTube Player */}
                                                {/* We do NOT pass isPlaying. undefined = AutoPlay (Priority 3 in our logic) */}
                                                { trailerKey && (
                                                    <div className="absolute inset-0 z-10">
                                                        <YouTubePlayer videoId={trailerKey} />
                                                    </div>
                                                )}
                                             </>
                                        ) : (  
                                            <Skeleton animation="wave" variant="rectangular" className="!w-full !h-full !bg-[#202020]" />
                                        ) }
                                    </div>

                                    <div className='cover w-full h-full'></div>
                                        <div className='cover1 w-full h-full'></div>

                                    {/* Movie Details */}
                                    <div className='flex flex-col gap-[15px] p-[20px] pt-0 text-white'>
                                        <div className='flex items-center gap-4 mt-4'>
                                            <h1 className='text-3xl font-bold tracking-wide'>{movie?.title}</h1>
                                        </div>
                                        
                                        <div className='flex flex-wrap gap-[10px] text-sm font-medium text-gray-300'>
                                            <span className='border border-gray-500 rounded px-2 py-0.5'>{new Date(movie?.release_date || Date.now()).getFullYear()}</span>
                                            <span className='border border-gray-500 rounded px-2 py-0.5'>{ageRating}</span>
                                            {genreNames.map((name, i) => (
                                                <span key={i} className='bg-gray-700 rounded px-2 py-0.5'>{name}</span>
                                            ))}
                                        </div>

                                        <p className='text-gray-300 text-sm leading-relaxed max-h-[100px] overflow-y-auto pr-2'>
                                            {movie?.overview}
                                        </p>
                                    </div>
                                </m.div>
                        </div>
                    )}
                </AnimatePresence>
            </LazyMotion>

        </div>
  )
}