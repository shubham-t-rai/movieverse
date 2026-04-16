import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchMovie, setInput }) => {
  const navigate = useNavigate();


  const handleClick = (movie) => {
    navigate(`/moviedetails/${movie.id}`);
    setInput("");
  };
  return (
    <div className="flex flex-col gap-2 h-120 vertical-scrollbar">
      {searchMovie.map((movie) => {
        return (
          <div
            onClick={() => handleClick(movie)}
            key={movie.id}
            className="border-b-2 cursor-pointer"
          >
            <div className="flex gap-2">
              <img
                className="h-10 w-10 object-cover"
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt=""
              />
              <h1>{movie.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
