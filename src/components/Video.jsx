import React from "react";

const Video = ({videoKey, setVideoKey}) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <button
        onClick={() => setVideoKey(null)}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✖
      </button>

      <iframe
        width="80%"
        height="500"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="Trailer"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Video;
