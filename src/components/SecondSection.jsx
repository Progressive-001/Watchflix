
import './SecondSection.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { motion, AnimatePresence } from 'framer-motion'
import MovieSection from './MovieSection'
import SideBarControl from './SideBarControl'
import MovieLoader from './MovieLoader'
import MovieModal from './MovieModal'

export default function SecondSection() {
   const {isLoading, popular} = useContext(MovieContext)
   const [isAnimating, setIsAnimating] = useState(false)
   const [show, setShow] = useState(false) 
   const [translateValue, setTranslateValue] = useState(0);
   const cardRef = useRef(null)

   console.log(isLoading);

//     const handleClick = (index) => {
//     console.log("Card clicked:", index);
//   }
   
 
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



              {isLoading ? (
                  <div
                     style={{
                        transform: isAnimating
                        ? `translateX(-${translateValue}px)`
                        : "translateX(0px)",
                        transition: "transform 1s ease-in-out",
                     }}
                     className="flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]"
                  >
                     <MovieLoader />
                  </div> 
               ) : (
                  <div> 
                        {/* {popular && popular.slice(0,10).map((contents, index)=> */}
                           <MovieSection isAnimating={isAnimating}/>
                        {/* // )} */}
                  </div>
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