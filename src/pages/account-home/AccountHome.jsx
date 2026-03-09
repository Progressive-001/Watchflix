// Hooks
import Skeleton from '@mui/joy/Skeleton'
import { useMovies } from '../../hooks/useMovies'
import { MovieContext } from '../../context/MovieContext'
import { useContext, useEffect, useState, useMemo, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

//Functions
import { shuffleArray } from '../../utils/shuffle'

//Icons
import { PlayIcon, InfoIcon } from '../../components/Icons/Icons.jsx'

//Components
import Popular from './homePage/video/Popular'
import TopRate from './homePage/video/TopRate'
import Upcoming from './homePage/video/Upcoming'
import AllMovie from './homePage/video/AllMovie'
import HomeHeader from '../../components/header/HomeHeader'
import FooterHomePage from '../../components/footers/FooterHomePage'


// Styles
import './AccountHome.css'
import YouTubePlayer from '../../utils/YoutubePlayer.jsx'
import VideoModal from './homePage/VideoModal.jsx'


export default function AccountHome() {
  const { isLoading, allMovie, popular, topRated, upcoming } = useContext(MovieContext);
  const { fetchMovieVideos } = useMovies();
  const [trailerKey, setTrailerKey] = useState(null);
  const [opacity, setOpacity] = useState(0); // Start invisible for fade-in effect
  const [forcePause, setForcePause] = useState(false);
  const heroRef = useRef(null);
  const [openModalData, setOpenModalData] = useState({ index: null, category: null });

  const handleCloseModal = () => {
    setOpenModalData({ index: null, category: null });
  }
  
  const shufflePopular = useMemo(() => shuffleArray(popular), [popular]);
  const shuffleTopRated = useMemo(() => shuffleArray(topRated), [topRated]);
  const shuffleUpcoming = useMemo(() => shuffleArray(upcoming), [upcoming]);
  const shuffleAllMovie = useMemo(() => shuffleArray(allMovie), [allMovie]);

  const heroMovieId = shuffleAllMovie[0]?.id;


  useEffect(() => {
    if (!heroMovieId) return;

    const loadTrailer = async () => {
      const trailer = await fetchMovieVideos(heroMovieId);
      setTrailerKey(trailer?.key || null);
    };

    loadTrailer();
  }, [heroMovieId]);

  // THE SCROLL OBSERVER LOGIC
  useEffect(() => {
    const observedEl = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newPause = !entry.isIntersecting;
        setForcePause(newPause);
        console.log('hero isIntersecting:', entry.isIntersecting, 'setting forcePause ->', newPause);
      },
      {
        threshold: 1,
      }
    );

    if (observedEl) {
      observer.observe(observedEl);
    }

    return () => {
      try {
        if (observedEl) observer.unobserve(observedEl);
      } catch (e) {
        // ignore
      }
      observer.disconnect();
    };
  }, []);

  const getSelectedMovie = () => {
    const { index, category } = openModalData;
    if (index === null) return null;
    if (category === 'popular') return shufflePopular[index];
    if (category === 'topRated') return shuffleTopRated[index];
    if (category === 'allMovie') return shuffleAllMovie[index];
    if (category === 'upcoming') return shuffleUpcoming[index];
    return null;
  };

  const selectedMovie = getSelectedMovie();

  return (
    <>
      <div className='flex flex-col justify-between items-center relative px-[20px] bg-black min-h-screen w-[100%] overflow-x-hidden'>
        <div className='w-[100%] h-[100%] m-0 p-0 absolute' ref={heroRef} >
          {!isLoading || shuffleAllMovie[0]?.backdrop_path ? (
            <>
              { opacity === 0 ? 
                <AnimatePresence mode='wait'>
                  <motion.div
                    key="sidebar-motion-right"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className='z-[1000] relative top-0 right-0 w-full h-full'
                    onMouseEnter={() => setOpacity(1)}
                  >
                    <img src={`https://image.tmdb.org/t/p/w1280${shuffleAllMovie[0]?.backdrop_path}`} alt="Hero" className='absolute object-cover w-full h-[79vh]' loading='eager'/>

                    <div className='flex flex-col gap-[25px] w-full max-w-[580px] translate-y-[14rem] translate-x-[4%] z-[9999]'>

                      <div className='flex flex-col gap-[10px] w-full'>
                        <h1 className='movie-title '>{shuffleAllMovie[0]?.title}</h1>
                        <p className='movie-overview font-caption2'>{shuffleAllMovie[0]?.overview.slice(0, 150)}...</p>
                      </div>

                      <div className='flex gap-[10px] w-full '>
                        <button onClick={() => setOpacity(1)} className='flex gap-[10px] bg-white text-black px-[20px] py-[10px] rounded-[2px] font-bold'>
                          <PlayIcon className='' />
                          Play
                        </button>
                        <button className='flex gap-[10px]  bg-[#8080808e] text-white px-[20px] py-[10px] rounded-[2px] font-bold'>
                          <InfoIcon className='' />
                          More Info
                        </button>
                      </div>
                    </div> 

                  </motion.div>
                </AnimatePresence>
                :
                <AnimatePresence mode='wait'>
                    <motion.div 
                      key="sidebar-motion-right"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className='z-[1000] absolute top-0 right-0 w-full h-full'
                    >
                      
                    <YouTubePlayer videoId={trailerKey} opacity={opacity} setOpacity={setOpacity} forcePause={forcePause} />
                  </motion.div>
                </AnimatePresence>
                
                

              }
          
              {/* <div className='absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent '></div> */}

            </> 
          )  : (
            <Skeleton animation="wave" variant="overlay" className=" !bg-[#151515] !h-[85vh] w-full" >
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                className="object-contain !h-[80vh] w-full"
              />
          </Skeleton>
          )}
        
        </div>

        <HomeHeader />

        <div className='flex flex-col gap-[40px] self-start translate-y-[80%]  w-[100%] pr-[20px] mr-0 absolute z-[9999]'>
          <Popular setOpenModalIndex={(index) => setOpenModalData({ index, category: 'popular' })}  shufflePopular={shufflePopular} heroMovieId={heroMovieId}/>
          <TopRate setOpenModalIndex={(index) => setOpenModalData({ index, category: 'topRated' })} shuffleTopRated={shuffleTopRated} heroMovieId={heroMovieId}/>
          <AllMovie setOpenModalIndex={(index) => setOpenModalData({ index, category: 'allMovie' })} shuffleAllMovie={shuffleAllMovie} heroMovieId={heroMovieId}/>
          <Upcoming setOpenModalIndex={(index) => setOpenModalData({ index, category: 'upcoming' })} shuffleUpcoming={shuffleUpcoming} heroMovieId={heroMovieId}/>
        </div>

        <div className='absolute w-full translate-y-[100rem] pl-[20px] '>
          <FooterHomePage />
        </div>

      </div>


      {/* Render 1 Single Modal */}
      {selectedMovie && (
        <VideoModal
            key={selectedMovie.id}
            movie={selectedMovie} 
            index={openModalData.index} 
            isOpen={true}
            onClose={handleCloseModal}
            isLoading={isLoading}
        />
      )}

    </>


  )
}
  
