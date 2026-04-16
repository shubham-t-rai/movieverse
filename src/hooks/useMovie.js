import { useContext } from "react";
import { MovieContext } from "../context/movie.context";
import {
  getNowPlaying,
  getPopular,
  getSearch,
  getTopRated,
  getUpcoming,
  getMovieDetails,
  getMovieVideo,
} from "../services/movie.api";

export const useMovie = () => {
  const {
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
    movieVideo,
    setMovieVideo,
    loading,
    setLoading,
  } = useContext(MovieContext);

  const fetchAllMovies = async () => {
    try {
      setLoading(true);
      const [np, pop, top, up, md] = await Promise.all([
        getNowPlaying(),
        getPopular(),
        getTopRated(),
        getUpcoming(),
      ]);
      setNowPlaying(np.data.results);
      setPopular(pop.data.results);
      setTopRated(top.data.results);
      setUpcoming(up.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchMovie = async (query) => {
    setLoading(true);
    const res = await getSearch(query);
    setSearchMovie(res.data.results);
    setLoading(false);
  };

  const handleMovieDetails = async (id) => {
    setLoading(true);
    const res = await getMovieDetails(id);
    setMovieDetails(res.data);
    setLoading(false);
  };

  const handleVideo = async (id) => {
    setLoading(true);
    const res = await getMovieVideo(id);
    setMovieVideo({
      id,
      results: res.data.results,
    });
    setLoading(false);
    return res;
  };

  return {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    movieDetails,
    searchMovie,
    movieVideo,
    setSearchMovie,
    setMovieDetails,
    setMovieVideo,
    loading,
    fetchAllMovies,
    handleSearchMovie,
    handleMovieDetails,
    handleVideo,
  };
};
