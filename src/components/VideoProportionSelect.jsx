import React, { useState } from "react";

const VideoProportionSelector = ({proportion,handleSelection}) => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Select Video Proportion
        </h2>
        <div className="flex justify-between">
          {["Portrait", "Landscape", "Square"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelection(option)}
              className={`px-4 py-2 rounded-lg shadow-sm text-gray-700 focus:outline-none transition duration-300 ${
                proportion === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {proportion && (
          <p className="mt-4 text-sm text-gray-600">
            Selected Proportion:{" "}
            <span className="font-medium">{proportion}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoProportionSelector;
