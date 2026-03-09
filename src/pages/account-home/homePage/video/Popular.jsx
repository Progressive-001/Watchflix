import React, { useContext, useMemo, useRef, useState } from 'react'
import { MovieContext } from '../../../../context/MovieContext'
import MovieLoaderHome from '../../../../components/MovieLoaderHome'
import { shuffleArray } from '../../../../utils/shuffle'

// Components
import VideoModal from '../VideoModal'
import MovieCard from './MovieCard'

export default function Popular({setOpenModalIndex, shufflePopular, heroMovieId}) {
    const { popular, isLoading } = useContext(MovieContext);

    const rowRef = useRef(null)
    let isDown = false;
    let startX;
    let scrollLeft;

    // useMemo: memoize the shuffled slice so we only reshuffle when `popular` changes
    // const shufflePopular = useMemo(() => shuffleArray(popular), [popular])

    const handleClick = (index) => {
        setOpenModalIndex(index);
        console.log(heroMovieId);
        console.log("Card clicked:", index);


    }

    // --- DRAG SCROLL LOGIC ---
    const onMouseDown = (e) => {
        isDown = true;
        rowRef.current.classList.add('cursor-grabbing');
        startX = e.pageX - rowRef.current.offsetLeft;
        scrollLeft = rowRef.current.scrollLeft;
    }

    const onMouseLeave = () => {
        isDown = false;
        if(rowRef.current) rowRef.current.classList.remove('cursor-grabbing');
    }

    const onMouseUp = () => {
        isDown = false;
        if(rowRef.current) rowRef.current.classList.remove('cursor-grabbing');
    }

    const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - rowRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        rowRef.current.scrollLeft = scrollLeft - walk;
    }


  return (
    <div className='relative'>
        <div className='z-40 flex flex-col justify-center items-start self-start gap-[5px] w-full'>
            <h2 className='text-white font-bold text-xl ml-4'>Popular Movies</h2>
            
            <div 
                className='flex flex-row gap-[8px] cursor-pointer w-full overflow-hidden overflow-y-hidden px-4 pb-4 no-scrollbar'
                ref={rowRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {isLoading || popular.length === 0 ? (
                    <MovieLoaderHome />
                ) : (
                    //RENDER LIST OF CARDS
                    shufflePopular.slice(0, 20).map((popularMovie, index) => (
                        <MovieCard 
                            key={popularMovie.id} 
                            movie={popularMovie} 
                            handleClick={handleClick} 
                            index={index} 
                        />
                    ))
                )}
            </div>
        </div>

        {/* RENDER SINGLE MODAL (Only if index is selected) */}
        {/* {openModalIndex !== null && shufflePopular[openModalIndex] && (
            <VideoModal 
                key={shufflePopular[openModalIndex].id}
                movie={shufflePopular[openModalIndex]} 
                index={openModalIndex} 
                isOpen={true}
                onClose={handleCloseModal}
                isLoading={isLoading}
            />
        )} */}
    </div>
  )
}