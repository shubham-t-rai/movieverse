import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { useWatchList } from "../hooks/useWatchList";
import Video from "./Video";
import { useAuth0 } from "@auth0/auth0-react";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    handleMovieDetails,
    movieDetails,
    handleVideo,
    movieVideo,
    setMovieVideo,
  } = useMovie();
  const { addToWatchList, isInWatchList } = useWatchList();
  const { isAuthenticated } = useAuth0();

  const [videoKey, setVideoKey] = useState(null);

  const added = movieDetails ? isInWatchList(movieDetails?.id) : false;

  const navigate = useNavigate();

  useEffect(() => {
    handleMovieDetails(id);
  }, [id]);

  useEffect(() => {
    setMovieVideo(null);
    setVideoKey(null);
  }, [id]);

  useEffect(() => {
    if (!movieVideo?.results) return;

    if (movieVideo.id !== Number(id)) return;

    const trailer = movieVideo.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube",
    );

    if (trailer) {
      setVideoKey(trailer.key);
    } else {
      alert("Trailer not available");
    }
  }, [movieVideo, id]);

  return (
    <section className="relative min-h-screen">
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      <div className="absolute z-20 bottom-10 md:bottom-20 w-full px-4 md:px-10 flex flex-col gap-3 md:gap-4">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          {movieDetails?.title}
        </h1>
        <p className="text-sm md:text-base max-w-md md:max-w-2xl line-clamp-3">
          {movieDetails?.overview}
        </p>
        <p className="text-sm md:text-base">
          Released on : {movieDetails?.release_date}
        </p>
        <div className="flex gap-4 text-sm md:text-base">
          <p>⭐{movieDetails?.vote_average.toFixed(1)}/10</p>
          <p>{movieDetails?.runtime} minutes</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleVideo(movieDetails?.id)}
            className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-(--primary-accent-color) rounded-full active:scale-95"
          >
            ▶ Watch
          </button>
          <button
            onClick={async () => {
              if (!isAuthenticated) {
                navigate("/watchlist");
                return;
              }

              addToWatchList(movieDetails);
            }}
            className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base bg-(--background-color) rounded-full active:scale-95"
          >
            {added ? "✅ Added to Watchlist" : "➕ Add to Watchlist"}
          </button>
        </div>
      </div>
      {videoKey && <Video videoKey={videoKey} setVideoKey={setVideoKey} />}
    </section>
  );
};

export default MovieDetails;
