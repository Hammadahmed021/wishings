import React, { useState } from "react";

const VideoTitleInput = ({
  removeTitle,
  titles,
  handleTitleChange,
  addTitle,
}) => {
  return (
    <div className="p-6  mx-auto bg-white rounded-lg border space-y-4 mb-16">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
        Video Titles
      </h2>
      <div className="space-y-4">
        {titles.map((title, index) => (
          <div key={index} className="flex items-center space-x-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Title ${index + 1}`}
              value={title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
            />
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={() => removeTitle(index)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-full bg-primary text-white py-2 px-4 rounded-lg duration-200 transition-all hover:bg-secondary"
        onClick={addTitle}
      >
        Add Title
      </button>
      <div className="pt-4">
        <h2 className="text-lg font-semibold text-gray-700">Your Titles:</h2>
        <ul className="list-item list-inside">
          {titles
            .filter((title) => title?.trim() !== "") // Filter out empty titles
            .map((title, index) => (
              <li key={index} className="text-muted text-base">
                {title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoTitleInput;
