import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchMovie, setSearchMovie] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [watchList, setWatchList] = useState([]);
  const [movieVideo, setMovieVideo] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <MovieContext.Provider
      value={{
        nowPlaying,
        setNowPlaying,
        popular,
        setPopular,
        topRated,
        setTopRated,
        upcoming,
        setUpcoming,
        searchMovie,
        setSearchMovie,
        movieDetails,
        setMovieDetails,
        watchList,
        setWatchList,
        movieVideo,
        setMovieVideo,
        loading,
        setLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
