import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getNowPlaying = async () => {
  const movies = await api.get("/3/movie/now_playing", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });
  return movies;
};

export const getPopular = async () => {
  const movies = await api.get("/3/movie/popular", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });
  return movies;
};

export const getTopRated = async () => {
  const movies = await api.get("/3/movie/top_rated", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });
  return movies;
};

export const getUpcoming = async () => {
  const movies = await api.get("/3/movie/upcoming", {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });
  return movies;
};

export const getSearch = async (query) => {
  const movie = await api.get(`/3/search/movie`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      query: query,
    },
  });
  return movie;
};

export const getMovieDetails = async (id) => {
  const movie = await api.get(`/3/movie/${id}`, {
    params: { api_key: import.meta.env.VITE_TMDB_API_KEY },
  });
  return movie;
};

export const getMovieVideo = async (id) => {
  const movie = api.get(`/3/movie/${id}/videos`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });
  return movie;
};
