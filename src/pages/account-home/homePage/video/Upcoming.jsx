import { useContext, useMemo, useRef, useState } from "react";
import { MovieContext } from "../../../../context/MovieContext";
import { shuffleArray } from '../../../../utils/shuffle';
import MovieLoaderHome from '../../../../components/MovieLoaderHome';

import VideoModal from "../VideoModal";
import MovieCard from "./MovieCard";

export default function Upcoming({setOpenModalIndex, shuffleUpcoming, heroMovieId}) {
    const { upcoming, isLoading } = useContext(MovieContext);
    
    const rowRef = useRef(null)
    let isDown = false;
    let startX;
    let scrollLeft;

    // const shuffleUpcoming = useMemo(() => shuffleArray(upcoming), [upcoming]);

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
        <div className="relative">

            <div className='z-40 flex flex-col justify-center items-start self-start gap-[5px] w-full'>
                <h2 className='text-white font-bold text-xl ml-4'>Upcoming Movies</h2>
                
                <div 
                    className='w-full flex flex-row gap-[8px] overflow-hidden overflow-y-hidden px-4 pb-4 no-scrollbar cursor-pointer flex-nowrap'
                    ref={rowRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    {isLoading || upcoming.length === 0 ? (
                        <MovieLoaderHome />
                    ) : (
                        // Render List of Cards
                        shuffleUpcoming.slice(0, 20).map((upcomingMovie, index) => (
                            <MovieCard 
                                key={`upcoming-${upcomingMovie.id}-${index}`}
                                movie={upcomingMovie} 
                                handleClick={handleClick} 
                                index={index} 
                            />
                        ))
                    )}
                </div>
            </div>
            
            {/* RENDER SINGLE MODAL (Only if index is selected) */}
            {/* {openModalIndex !== null && shuffleUpcoming[openModalIndex] && (
                <VideoModal 
                    key={shuffleUpcoming[openModalIndex].id}
                    movie={shuffleUpcoming[openModalIndex]} 
                    index={openModalIndex} 
                    isOpen={true}
                    onClose={handleCloseModal}
                    isLoading={isLoading}
                />
            )} */}
        </div>
       
    )
}