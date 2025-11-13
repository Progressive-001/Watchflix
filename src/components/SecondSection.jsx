import './SecondSection.css'
import { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { motion, AnimatePresence } from 'framer-motion'
import MovieSection from './MovieSection'
import SideBarControl from './SideBarControl'
import MovieLoader from './MovieLoader'

export default function SecondSection() {
   const {isLoading } = useContext(MovieContext)
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

            <div className='h-[300px]'>

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

               {/* {popular && popular.slice(0,10).map((item, index)=>
                  <div key={index} className={`${isAnimating ? 'transition -translate-x-[1030px] duration-1000': 'translate-x-[0px] duration-1000'}`}> 
                     <MovieSection contents={item} numbers={index}/>
                  </div> 
               )} */}

               {isLoading ? (
                  <div className={`${isAnimating ? 'transition -translate-x-[1030px] duration-1000': 'translate-x-[0px] duration-1000'} flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]`}> 
                     <MovieLoader />
                  </div> 
               ): (<div  className={` ${isAnimating ? 'transition -translate-x-[1090px] duration-1000 max-x1:-translate-x-[1300px] max-x2:-translate-x-[1195px] sm:-translate-x-[750px] md:-translate-x-[1090px] lg:-translate-x-[1190px] xl:-translate-x-[1010px]': 'translate-x-[0px] duration-1000'} flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]`}> 
                     <MovieSection/>
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