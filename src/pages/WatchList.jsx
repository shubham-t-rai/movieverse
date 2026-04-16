import { useEffect } from "react";
import { useWatchList } from "../hooks/useWatchList";

const WatchList = () => {
  const { watchList, removeFromWatchList } = useWatchList();

  if (watchList.length === 0) {
    return <h1 className="text-3xl text-center mt-5">No watclist added</h1>;
  }

  console.log("watchList", watchList);

  return (
    <section className="px-4 md:px-10 py-4">
      <h1 className="text-xl md:text-2xl font-semibold">WatchList</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {watchList.map((watch) => (
          <div key={watch?.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${watch?.backdrop_path}`}
              alt=""
              className="w-full h-32 md:h-40 object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-lg" />

            <h1 className="absolute top-2 left-2 z-10 text-white text-sm md:text-base font-semibold line-clamp-1">
              {watch?.title}
            </h1>

            <button
              onClick={() => removeFromWatchList(watch?.id)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 text-sm md:text-base bg-(--primary-accent-color) rounded-full active:scale-95"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchList;
