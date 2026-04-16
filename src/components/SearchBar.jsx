import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMovie } from "../hooks/useMovie";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { handleSearchMovie, searchMovie, setSearchMovie } = useMovie();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setInput("");
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (input.trim().length === 0) {
        setSearchMovie([]);
        return;
      }

      handleSearchMovie(input);
    }, 500);
    return () => clearTimeout(delay);
  }, [input]);

  return (
    <div ref={wrapperRef} className="relative w-full z-50">
      <div className="flex items-center w-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-1 min-w-0 bg-transparent outline-none px-2 py-1 text-sm md:text-base"
          placeholder="Search movies...."
        />
        <Search className="shrink-0" />
      </div>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={`absolute left-0 w-full z-50 bg-(--background-color) text-(--secondary-text-color) mt-2 px-3 rounded py-2 max-h-60 overflow-y-auto ${input?.length > 0 ? "block" : "hidden"}`}
      >
        {searchMovie?.length > 0 && (
          <SearchResults searchMovie={searchMovie} setInput={setInput} />
        )}

        {input && searchMovie?.length === 0 && (
          <p className="text-sm text-center py-2">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
