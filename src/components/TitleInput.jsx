import React, { useState } from "react";

const VideoTitleInput = ({
  removeTitle,
  titles,
  handleTitleChange,
  addTitle,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Video Titles</h1>
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
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={addTitle}
      >
        Add Title
      </button>
      <div className="pt-4">
        <h2 className="text-lg font-semibold text-gray-700">Your Titles:</h2>
        <ul className="list-disc list-inside">
          {titles
            .filter((title) => title?.trim() !== "") // Filter out empty titles
            .map((title, index) => (
              <li key={index} className="text-gray-600">
                {title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoTitleInput;
