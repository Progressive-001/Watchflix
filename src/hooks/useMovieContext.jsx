import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export const useTheme = () => {
  const context = useContext(MovieContext)

  if ( context === undefined ) {
    throw new Error ("useMovieContext() must be used inside a MovieProvider")
  }

  return context
}