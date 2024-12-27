import React, { useState } from "react";
import VideoDisplay from "./VideoShowComp";

const VideoProportionSelector = ({ proportion, handleSelection, catVideo }) => {
  return (
    <div className="flex flex-col items-center justify-start mb-16">
      <div className="p-6 bg-white rounded-lg border w-full ">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
          Select Video Proportion
        </h2>
        <div className="flex justify-start gap-4">
          {["Portrait", "Landscape", "Square"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelection(option)}
              className={`px-4 py-2 rounded-lg shadow-sm text-white focus:outline-none transition duration-300 ${
                proportion === option
                  ? "bg-secondary text-white"
                  : "bg-primary hover:bg-secondary"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {proportion && (
          <p className="mt-4 text-base text-muted">
            Selected Proportion:{" "}
            <span className="font-medium">{proportion}</span>
          </p>
        )}
        <span className="block mt-4">
          <VideoDisplay videoSrc={catVideo.video_path} videoType={proportion} />
        </span>
      </div>
    </div>
  );
};

export default VideoProportionSelector;
