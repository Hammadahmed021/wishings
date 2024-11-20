import React, { useState } from "react";

const VideoInstructionsInput = ({instructions,handleInputChange}) => {


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md">
        <label
          htmlFor="instructions"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Instructions for the Editor
        </label>
        <input
          type="text"
          id="instructions"
          value={instructions}
          onChange={(e)=>handleInputChange(e)}
          placeholder="Write your instructions here"
          className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
        <p className="mt-4 text-sm text-gray-600">
          Current Instructions:{" "}
          <span className="font-medium">{instructions}</span>
        </p>
      </div>
    </div>
  );
};

export default VideoInstructionsInput;
