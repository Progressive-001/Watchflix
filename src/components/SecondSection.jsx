import './SecondSection.css'
import { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import MovieSection from './MovieSection'
import SideBarControl from './SideBarControl'
import MovieLoader from './MovieLoader'
// import MovieModal from './MovieModal'

export default function SecondSection() {
   const {isLoading, popular} = useContext(MovieContext)
   const [isAnimating, setIsAnimating] = useState(false)
   const [show, setShow] = useState(false) 

   console.log(isLoading);

 
  return (
      <div className='second-section '>

         <div className='combine-container'>
            <div className='first-section'></div>
         </div>

         <div className="content-wrapper font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-normal">
            <h5 className='font-bold'>Trending Now</h5>

            <div className='h-[190px] sm:h-[190px] md:h-[250px] lg:h-[300px]'>

               <AnimatePresence>
                  {show && (
                     <motion.div
                        key="sidebar-motion"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className='z-[1000] absolute top-0 left-0'

                     >
                        <SideBarControl 
                           setShow={setShow} 
                           isAnimating={isAnimating} 
                           setIsAnimating={setIsAnimating} 
                           variant='leftHand'
                        />
                     </motion.div>
                  )}
               </AnimatePresence>


               {isLoading || popular.length === 0 ? (
                  <div className={`${isAnimating ? 'transition -translate-x-[1030px] duration-1000': 'translate-x-[0px] duration-1000'} flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]`}> 
                     <MovieLoader />
                  </div> 
               ) : (
                  <MovieSection isAnimating={isAnimating} />
               )}

               <AnimatePresence>
                  {!show && (
                     <motion.div
                        key="sidebar-motion-right"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className='z-[1000] absolute top-0 right-0'

                     >
                        <SideBarControl 
                           setShow={setShow} 
                           isAnimating={isAnimating} 
                           setIsAnimating={setIsAnimating} 
                        />
                     </motion.div>
                  )}
               </AnimatePresence>

            </div>

         </div>
  
      </div>
  )
}