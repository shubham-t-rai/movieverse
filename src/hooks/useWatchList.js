import { useContext, useEffect } from "react";
import { MovieContext } from "../context/movie.context";

export const useWatchList = () => {
  const { watchList, setWatchList } = useContext(MovieContext);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (store) setWatchList(store);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
  }, [watchList]);


  const addToWatchList = (movie) => {
    setWatchList((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchList = (id) => {
    setWatchList((prev) => prev.filter((m) => m.id !== id));
  };

  const isInWatchList = (id) => {
    return watchList.some((m) => m.id === id);
  };

  return {
    watchList,
    addToWatchList,
    removeFromWatchList,
    isInWatchList,
  };
};
