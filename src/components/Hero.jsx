import { memo } from "react";
import { useEffect, useState } from "react";
import { useMovie } from "../hooks/useMovie";
import { useNavigate } from "react-router-dom";
import { useWatchList } from "../hooks/useWatchList";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = memo(() => {
  const { nowPlaying } = useMovie();
  const { addToWatchList, isInWatchList } = useWatchList();

  const {isAuthenticated} = useAuth0();

  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = nowPlaying.slice(0, 5);

  const currentMovie = movies[currentIndex];

  const added = currentMovie ? isInWatchList(currentMovie?.id) : false;

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <section
      onClick={() => navigate(`/moviedetails/${currentMovie.id}`)}
      className="w-full min-h-[60vh] md:h-[80vh] relative"
    >
      <img
        onClick={() =>
          currentMovie && navigate(`/moviedetails/${currentMovie.id}`)
        }
        src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute bottom-10 md:bottom-20 z-20 px-4 md:px-20 flex flex-col gap-2">
        <p>⭐{currentMovie?.vote_average.toFixed(1)}/10</p>
        <h1 className="text-2xl md:text-6xl font-bold leading-tight">
          {currentMovie?.title}
        </h1>
        <p className="text-sm md:text-base max-w-xs md:max-w-2xl line-clamp-2">
          {currentMovie?.overview}
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <button className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-(--primary-accent-color) rounded-full active:scale-95">
            ▶ Watch
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!isAuthenticated) {
                navigate("/watchlist");
                return;
              }

              addToWatchList(currentMovie);
            }}
            className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-(--background-color) rounded-full active:scale-95"
          >
            {added ? "✅ Added to Watchlist" : "➕ Add to Watchlist"}
          </button>
        </div>
      </div>
    </section>
  );
});

export default Hero;
