import React, { useState } from "react";

const VideoTitleInput = ({ handleSubmit, title, handleInputChange }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm"
      >
        <label
          htmlFor="videoTitle"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Video Title
        </label>
        <input
          type="text"
          id="videoTitle"
          value={title}
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter video title"
          className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </form>
    </div>
  );
};

export default VideoTitleInput;
