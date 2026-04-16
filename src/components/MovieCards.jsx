import { useState } from "react";
import { useMovie } from "../hooks/useMovie";
import { useNavigate } from "react-router-dom";

const MovieCards = () => {
  const { popular, topRated, upcoming } = useMovie();
  const [active, setActive] = useState("popular");
  const navigate = useNavigate();

  const movies =
    active === "popular"
      ? popular
      : active === "topRated"
        ? topRated
        : upcoming;

  return (
    <section className="mt-5">
      <div className="flex gap-2 px-10 items-center flex-wrap">
        <button
          onClick={() => setActive("popular")}
          className={` px-4 py-1 rounded-full cursor-pointer active:scale-95 border-none outline-none ${active === "popular" ? "bg-(--primary-accent-color)" : "bg-(--background-color)"}`}
        >
          Popular
        </button>
        <button
          onClick={() => setActive("topRated")}
          className={` px-4 py-1 rounded-full cursor-pointer active:scale-95 border-none outline-none ${active === "topRated" ? "bg-(--primary-accent-color)" : "bg-(--background-color)"}`}
        >
          Top Rated
        </button>
        <button
          onClick={() => setActive("upcoming")}
          className={` px-4 py-1 rounded-full cursor-pointer active:scale-95 border-none outline-none ${active === "upcoming" ? "bg-(--primary-accent-color)" : "bg-(--background-color)"} `}
        >
          Upcoming
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-10 py-5">
        {movies.map((movie) => (
          <div
            key={movie?.id}
            onClick={() => navigate(`/movieDetails/${movie.id}`)}
            className="cursor-pointer flex flex-col gap-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
               className="w-full h-32 md:h-40 object-cover rounded-lg"
            />

            <h1 className="text-sm md:text-base font-semibold line-clamp-1 mt-1">{movie?.title}</h1>

            <div className="flex justify-between text-xs md:text-sm text-(--secondary-text-color)">
              <p>{movie?.release_date}</p>
              <p>{movie?.vote_average.toFixed(1)}/10</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCards;
