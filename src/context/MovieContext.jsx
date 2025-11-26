/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext } from "react";
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
    const controller = new AbortController();

    const fetchMovies = async () => {
      setIsLoading(false);
      try {
        // await new Promise((resolve)=>setTimeout(resolve, 4000))

        const [popRes, topRes, upRes, genreRes] = await Promise.all([
          api.get("/movie/popular", { signal: controller.signal }),
          api.get("/movie/top_rated", { signal: controller.signal }),
          api.get("/movie/upcoming", { signal: controller.signal }),
          api.get("/genre/movie/list", { signal: controller.signal }),
        ]);

        setPopular(popRes.data.results);
        setTopRated(topRes.data.results);
        setUpcoming(upRes.data.results);
        setGenreRes(genreRes.data.genres);
        setError(null);
        // setIsLoading(false);

      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Request aborted");
        } else {
          console.error(error.message);
          setError("Unable to fetch movies");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, []);

  const allMovie = [...popular, ...upcoming, ...topRated];

  return (
    <MovieContext.Provider
      value={{ error, isLoading, popular, topRated, upcoming, allMovie, genreRes }}
    >
      {children}
    </MovieContext.Provider>
  );
};
