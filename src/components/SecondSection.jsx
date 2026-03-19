//Hook imports
// eslint-disable-next-line no-unused-vars
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MovieContext } from '../context/MovieContext'

//styles
import './SecondSection.css'

//Components
import MovieSection from './MovieSection'
import SideBarControl from './SideBarControl'
import MovieLoader from './MovieLoader'

export default function SecondSection() {
   const {isLoading, popular} = useContext(MovieContext)
   const [isAnimating, setIsAnimating] = useState(false)
   const [currentIndex, setCurrentIndex] = useState(0)
   const [visibleItems, setVisibleItems] = useState(5)
   const [cardWidth, setCardWidth] = useState(0)
   const [show, setShow] = useState(false) 

   // console.log(isLoading);


   //Listen to Size
   useEffect(() => {
      const handleSize = () => {

         let width = window.innerWidth
         if(width < 640) {
            setVisibleItems(1)
         }else if ( width < 1240){
            setVisibleItems(3)
         }else{
            setVisibleItems(5)
         }
      }

      handleSize();
      window.addEventListener('resize', handleSize)
      return () => removeEventListener('resize', handleSize)
   },[])

   const trackRef = useRef(null);
   const cardRef = useRef(null);

   useLayoutEffect(() => {
      if (!cardRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      // gap is applied on parent flex container
      const track = trackRef.current
      const gap = parseFloat(getComputedStyle(track).columnGap || 0)

      setCardWidth(cardRect.width + gap)


   }, [])

   const totalItems = Math.min(10, popular.length) + 0.5;
   const maxIndex = Math.max(0, totalItems - visibleItems);

   const goPrev = currentIndex > 0;
   const goNext = currentIndex < maxIndex;

   const isReady = cardWidth > 0 && visibleItems > 0

   const handleNext = () => {
   setCurrentIndex(prev => {
      if (!isReady || prev >= maxIndex) return prev
      return Math.min(prev + 1, maxIndex);
   })
   }

   const handlePrev = () => {
   setCurrentIndex(prev => {
      if (!isReady || prev <= 0) return prev
      return Math.max(prev - 1, 0)
   })
   }

   useLayoutEffect(() => {
      const handleResize = () => {
         if (!cardRef.current) return;
         setCardWidth(cardRef.current.getBoundingClientRect().width)
      }

      window.addEventListener('resize', handleResize)
      return () => removeEventListener('resize', handleResize)
   },[])

   console.log({
      currentIndex,
      maxIndex,
      cardWidth,
      translateX: currentIndex * cardWidth
   })

   useEffect(() => {
  console.table({
    currentIndex,
    visibleItems,
    cardWidth,
    translateX: currentIndex * cardWidth
  })
}, [currentIndex, visibleItems, cardWidth])

  return (
      <div className='second-section '>

         <div className='combine-container'>
            <div className='first-section'></div>
         </div>

         <div className="content-wrapper font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-normal">
            <h5 className='font-bold'>Trending Now</h5>

            <div className='h-[190px] sm:h-[190px] md:h-[250px] lg:h-[300px]'>

               <LazyMotion features={domAnimation}>
                  <AnimatePresence>
                     {goPrev && (
                        <m.div
                           key="sidebar-motion"
                           initial={{ opacity: 0, x: -100 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -100 }}
                           transition={{ duration: 0.9, ease: "easeInOut" }}
                           className='z-[1000] absolute top-0 left-0'

                        >
                           <SideBarControl 
                              variant='leftHand'
                              onClick={handlePrev}
                              disabled={!goPrev || !isReady}
                           />
                        </m.div>
                     )}
                  </AnimatePresence>
               </LazyMotion>
                  

               {isLoading && popular?.length === 0 ? (
                  <div className={`${isAnimating ? 'transition -translate-x-[1030px] duration-1000': 'translate-x-[0px] duration-1000'} flex p-0 my-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[36px]`}> 
                     <MovieLoader />
                  </div> 
               ) : (
                  <MovieSection 
                     isAnimating={isAnimating}
                     trackRef={trackRef}
                     cardRef={cardRef}
                     cardWidth={cardWidth}
                     currentIndex={currentIndex}
                     disabled={!goPrev}
                  />
               )}

               <LazyMotion features={domAnimation}>
                  <AnimatePresence>
                     {goNext && (
                        <m.div
                           key="sidebar-motion-right"
                           initial={{ opacity: 0, x: 100 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: 100 }}
                           transition={{ duration: 0.9, ease: "easeInOut" }}
                           className='z-[1000] absolute top-0 right-0'

                        >
                           <SideBarControl 
                              onClick={handleNext}
                              disabled={!goNext || !isReady}

                           />
                        </m.div>
                     )}
                  </AnimatePresence>
               </LazyMotion>


            </div>

         </div>
  
      </div>
  )
}