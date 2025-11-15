
import './SecondSection.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { motion, AnimatePresence } from 'framer-motion'
import MovieSection from './MovieSection'
import SideBarControl from './SideBarControl'
import MovieLoader from './MovieLoader'

export default function SecondSection() {
   const {isLoading } = useContext(MovieContext)
   const [isAnimating, setIsAnimating] = useState(false)
   const [show, setShow] = useState(false) 
   const [translateValue, setTranslateValue] = useState(0);
   const cardRef = useRef(null)

   console.log(isLoading);

   // useEffect(() =>{
      
   //    const handleSize = ()=>{
   //       setTranslateValue(window.innerWidth * 1.16)
   //    // console.log(translateValue);

   //    }

   //    handleSize();
   //    window.addEventListener('resize', handleSize);
   //    return() => window.addEventListener('resize', handleSize);
   //    // console.log(translateValue);
      
   // },[])

   useEffect(() => {
      const calculateTranslate = () => {
         if (!cardRef.current) return;

         const cardWidth = cardRef.current.offsetWidth;
         const containerWidth = window.innerWidth;

         const cardsPerRow = Math.floor(containerWidth / cardWidth);

         const safeCards = cardsPerRow > 0 ? cardsPerRow : 1;

         setTranslateValue(cardWidth * safeCards);
      };

      calculateTranslate();
      window.addEventListener("resize", calculateTranslate);

      return () => window.removeEventListener("resize", calculateTranslate);
   }, []);

      console.log(translateValue);
      console.log("Card width:", cardRef.current?.offsetWidth);

 
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
                  <div
                     style={{
                        transform: `translateX(${isAnimating ? -translateValue : 0}px)`,
                        transition: "transform 1s ease-in-out",
                     }}
                     className="flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]"
                  >
                     <MovieSection cardRef={cardRef}/>
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