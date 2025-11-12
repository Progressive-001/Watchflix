/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext } from "react";
import api from "../components/api/axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve)=>setTimeout(resolve, 4000))

        const [popRes, topRes, upRes] = await Promise.all([
          api.get("/movie/popular", { signal: controller.signal }),
          api.get("/movie/top_rated", { signal: controller.signal }),
          api.get("/movie/upcoming", { signal: controller.signal }),
        ]);

        setPopular(popRes.data.results);
        setTopRated(topRes.data.results);
        setUpcoming(upRes.data.results);
        setError(null);

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
      value={{ error, isLoading, popular, topRated, upcoming, allMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
