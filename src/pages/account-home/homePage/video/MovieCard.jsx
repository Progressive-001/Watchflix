
import { MovieContext } from '../../../../context/MovieContext';

import { useMovies } from '../../../../hooks/useMovies';

// Assets
import logo from "../../../../assets/account-home-assets/Netflix_2015_N_logo.svg";
import topRatedIcon from "../../../../assets/account-home-assets/Label.svg";

// Components
import YouTubePlayer from '../../../../utils/YoutubePlayer';
import { useState } from 'react';

// --- CHILD COMPONENT: Handles logic for ONE movie ---
export default function MovieCard ({ movie, handleClick, index })  {
    const { fetchMovieVideos } = useMovies();
    const [trailerKey, setTrailerKey] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    const [opacity, setOpacity] = useState(0); // Start invisible for fade-in effect



    // Fetch trailer ONLY when mouse enters this specific card
const handleMouseEnter = async () => {
        setIsHovered(true);

        if (!hasFetched && !trailerKey) {
            try {
                const data = await fetchMovieVideos(movie.id);
                
                let key = null;

                // Case 1: The API gave us the specific video object directly (Your current case)
                if (data?.key) {
                    key = data.key;
                } 
                // Case 2: The API gave us a list (Array), so we need to find the trailer
                else if (Array.isArray(data)) {
                    const trailer = data.find(v => v.site === "YouTube" && v.type === "Trailer");
                    key = trailer?.key;
                }
                // Case 3: The API gave us a raw object with a 'results' list
                else if (data?.results && Array.isArray(data.results)) {
                     const trailer = data.results.find(v => v.site === "YouTube" && v.type === "Trailer");
                     key = trailer?.key;
                }

                setTrailerKey(key);
                setHasFetched(true); 
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className='text-white w-[280px] h-[140px] flex-shrink-0 overflow-hidden relative rounded-[2px] transition-transform duration-300 hover:scale-105 hover:z-50 cursor-pointer bg-[#141414]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
        >
      
            {/* LAYER: Poster Image (Fades out on Hover) */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-500 opacity-100`}>
                <img 
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                    alt={movie.title} 
                    className='object-cover w-full h-full object-center' 
                    loading="lazy"
                />
                
                {/* Overlays (Logo, Top Rated) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                <img src={logo} alt="N" className='absolute top-2 left-3 w-3 h-4' />
                {movie.popularity > 100 && (
                    <img src={topRatedIcon} alt="Top Rated" className='absolute top-2 right-3 w-6' />
                )}
            </div>
            
            {/* Optional: Movie Title on Hover (if video fails or just as overlay) */}
            <div className={`absolute bottom-2 left-3 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                 <p className="text-xs font-bold drop-shadow-md">{movie.title}</p>
            </div>
        </div>
    );
};
