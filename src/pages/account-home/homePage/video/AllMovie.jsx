import { useContext, useMemo, useRef, useState } from "react";
import shuffleArray from "../../../../utils/shuffle";
import { MovieContext } from "../../../../context/MovieContext";
import MovieLoaderHome from '../../../../components/MovieLoaderHome' 
import MovieCard from './MovieCard'
import VideoModal from '../VideoModal'

// --- MAIN PARENT COMPONENT ---
export default function AllMovie({setOpenModalIndex, shuffleAllMovie, heroMovieId}) {
    const { allMovie, isLoading } = useContext(MovieContext);

    const rowRef = useRef(null)
    let isDown = false;
    let startX;
    let scrollLeft;

    // Shuffle only once when movies load
    // const shuffleMovies = useMemo(() => shuffleArray(allMovie), [allMovie]);

    const handleClick = (index) => {
        console.log("Card clicked:", index);
        setOpenModalIndex(index);
        console.log(heroMovieId);
        
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
            <div className='z-40 flex flex-col justify-center items-start self-start gap-[10px] w-full mb-0'>
                <h2 className='text-white font-bold text-xl ml-4'>We Think You'll Love These</h2>
                
                <div 
                    className='w-full flex flex-row gap-[8px] overflow-hidden overflow-y-hidden px-4 pb-4 no-scrollbar'
                    ref={rowRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    
                    {isLoading || allMovie.length === 0 ? (
                        <MovieLoaderHome />
                    ) : (
                        // Map through movies and render the Cards
                        shuffleAllMovie.slice(0, 20).map((movie, index) => (
                            <MovieCard 
                                key={movie.id} 
                                movie={movie} 
                                handleClick={handleClick}  
                                index={index}
                            />
                        ))
                    )}
                    
                </div>
            </div>

            {/* --- THE FIX: RENDER ONLY ONE MODAL --- */}
            {/* We check if an index is selected. If yes, we find that specific movie and show the modal. */}
            
            {/* {openModalIndex !== null && shuffleMovies[openModalIndex] && (
                <VideoModal 
                    key={shuffleMovies[openModalIndex].id} // Key helps React reset state when switching movies
                    movie={shuffleMovies[openModalIndex]} 
                    index={openModalIndex} 
                    isOpen={true} // It is always open if we are rendering this block
                    onClose={handleCloseModal}
                    isLoading={isLoading}
                />
            )} */}

        </div>
    )
};