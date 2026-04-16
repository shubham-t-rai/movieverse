import { useEffect } from "react";
import Hero from "../components/Hero";
import MovieCards from "../components/MovieCards";
import { useMovie } from "../hooks/useMovie";

const Home = () => {
  const { fetchAllMovies, loading } = useMovie();

  useEffect(() => {
    fetchAllMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-(--primary-accent-color)"></div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <MovieCards />
    </>
  );
};

export default Home;
