import { useState, useRef } from 'react';
import api from '../components/api/axios'

export const useMovies = () => {
    const [movieVideos, setMovieVideos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


        const controllerRef = useRef(null)

        const fetchMovieVideos = async (movieId) => {
            if (!movieId) return;

            controllerRef.current?.abort();
            controllerRef.current = new AbortController();

            setIsLoading(true);
            setError(null);

            try {
                const response = await api.get(`movie/${movieId}/videos`, { signal: controllerRef.current.signal });

    
                // setMovieVideos(results);
                setError(null);

                const videos = response.data.results ?? [];

                const trailer =
                videos.find(v => v.site === "YouTube" && v.type === "Trailer") ||
                videos.find(v => v.site === "YouTube" && v.type === "Teaser");

                setMovieVideos(videos);
                return trailer;


            } catch (err) {
                // axios cancellation may set err.code to 'ERR_CANCELED'
                if (err?.code === 'ERR_CANCELED' || err?.name === 'CanceledError') {
                    console.log('Request aborted');
                    return null;
                } else {
                    console.error('Error fetching movie videos:', err);
                    setError(err?.message ?? String(err));
                }
            } finally {
                setIsLoading(false);
            }
        }


    return { movieVideos, error, isLoading, fetchMovieVideos };

}