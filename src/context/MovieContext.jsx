/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useMemo } from "react";
import api from "../components/api/axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genreRes, setGenreRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let timer;

    const fetchMovies = async () => {
      try {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        if (!isMounted) return;

        const [popRes, topRes, upRes, genreRes] = await Promise.all([
          api.get("/movie/popular"),
          api.get("/movie/top_rated"),
          api.get("/movie/upcoming"),
          api.get("/genre/movie/list"),
        ]);

        if (isMounted) {
          setPopular(popRes.data.results);
          setTopRated(topRes.data.results);
          setUpcoming(upRes.data.results);
          setGenreRes(genreRes.data.genres);
          setError(null);
        }

      } catch (error) {
        if (isMounted) {
          console.error(error.message);
          setError("Unable to fetch movies");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);
  
// Only re-calculate this giant array if the source data actually changes
  const allMovie = useMemo(() => {
    
    return [...popular, ...upcoming, ...topRated];

  },[popular, upcoming, topRated])

  return (
    <MovieContext.Provider
      value={{ error, isLoading, popular, topRated, upcoming, allMovie, genreRes }}
    >
      {children}
    </MovieContext.Provider>
  );
};
