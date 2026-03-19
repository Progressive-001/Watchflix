import { useContext, useMemo, useRef, useState } from 'react';
import { MovieContext } from '../../../../context/MovieContext';
import MovieLoaderHome from '../../../../components/MovieLoaderHome';
import { shuffleArray } from '../../../../utils/shuffle';

import VideoModal from '../VideoModal';
import MovieCard from './MovieCard';

export default function TopRate({setOpenModalIndex, shuffleTopRated, heroMovieId}) {
    const { topRated, isLoading } = useContext(MovieContext);

    const rowRef = useRef(null)
    let isDown = false;
    let startX;
    let scrollLeft;

    // const shuffleTopRated = useMemo(() => shuffleArray(topRated), [topRated]);

    const handleClick = (index) => {
        setOpenModalIndex(index);
        console.log(heroMovieId);
        console.log("Card clicked:", index);


    }

    // --- SCROLL DRAG LOGIC ---
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
                <h2 className='text-white font-bold text-xl ml-4'>Top Rated Movies</h2>
                
                <div
                    className='w-full flex flex-row gap-[8px] overflow-hidden overflow-y-hidden px-4 pb-4 no-scrollbar cursor-pointer flex-nowrap'
                    ref={rowRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    {isLoading || topRated.length === 0 ? (
                        <MovieLoaderHome />
                    ) : (
                        // Render Cards
                        shuffleTopRated.slice(0, 20).map((topMovie, index) => (
                            <MovieCard 
                                key={`toprate-${topMovie.id}-${index}`}
                                movie={topMovie} 
                                handleClick={handleClick} 
                                index={index} 
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Render 1 Single Modal
            {openModalIndex !== null && shuffleTopRated[openModalIndex] && (
                <VideoModal 
                    key={shuffleTopRated[openModalIndex].id}
                    movie={shuffleTopRated[openModalIndex]} 
                    index={openModalIndex} 
                    isOpen={true}
                    onClose={handleCloseModal}
                    isLoading={isLoading}
                />
            )} */}
        </div>
    )
};