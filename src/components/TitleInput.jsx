import React, { useState } from "react";

const VideoTitleInput = ({
  removeTitle,
  titles,
  handleTitleChange,
  addTitle,
  currentTitle
}) => {
  return (
    <div className="p-6  mx-auto bg-white rounded-lg border space-y-4 mb-16">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
        Video Titles
      </h2>
      <div className="space-y-4">


      <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            console.log("sljkdbvlksdblvbsdklvbksdbvklsbd",currentTitle)
            if (currentTitle.trim()) {
              // Ensure tag is not empty
              addTitle(currentTitle);
            }
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => handleTitleChange(e)}
            placeholder="Enter a tag and press Add"
            className="flex-grow px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300"
          >
            Add
          </button>
        </form>

        {/* {titles.map((title, index) => (
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
        ))} */}
      </div>
      {/* <button
        type="button"
        className="w-full bg-primary text-white py-2 px-4 rounded-lg duration-200 transition-all hover:bg-secondary"
        onClick={addTitle}
      >
        Add Title
      </button> */}
      {titles.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center border text-black px-3 py-0 hover:bg-gray-100  rounded-full shadow-sm"
                >
                  <span>{title}</span>
                  <button
                    type="button"
                    onClick={() => removeTitle(title)}
                    className="ml-2 ttext-black cursor-pointer"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
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
