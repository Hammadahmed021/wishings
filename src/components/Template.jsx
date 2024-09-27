import React from "react";
import { useState } from "react";

export const Template = () => {

    const [videos] = useState([
        { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { url: "https://www.w3schools.com/html/movie.mp4" },
        { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { url: "https://www.w3schools.com/html/movie.mp4" },
        { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { url: "https://www.w3schools.com/html/movie.mp4" },
        { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { url: "https://www.w3schools.com/html/movie.mp4" },
        { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ]);

  return (
    <section className="-mt-6 md:mt-14 xl:-mt-6 2xl:-mt-28">
      <div className="xl:container xl:mx-auto">
        <h3 className="text-h3 text-center font-roboto">
          Start Fast with <span className="text-primary">6000+</span> Templates
        </h3>
        <div className="grid grid-cols-3 gap-4 p-4">
          {videos.map((video, index) => (
            <div key={index} className="relative w-full h-64">
              <video
                className="w-full h-full object-cover"
                src={video.url}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
