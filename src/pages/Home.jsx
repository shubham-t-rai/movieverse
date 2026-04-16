import { useEffect } from "react";
import Hero from "../components/Hero";
import MovieCards from "../components/MovieCards";
import { useMovie } from "../hooks/useMovie";

const Home = () => {
  const { fetchAllMovies } = useMovie();

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <>
      <Hero />
      <MovieCards />
    </>
  );
};

export default Home;
