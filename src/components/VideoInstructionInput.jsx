import React, { useState } from "react";

const VideoInstructionsInput = ({ instructions, handleInputChange }) => {


  return (
    <div className="flex flex-col items-center justify-start w-full mb-16">
      <div className="p-4 rounded-lg border w-full">
        <label
          htmlFor="instructions"
          className="block text-5xl sm:text-2xl font-medium font-poppins text-black mb-4"
        >
          Instructions for the Editor
        </label>
        <textarea
          value={instructions}
          onChange={(e) => handleInputChange(e)}
                  placeholder="Write your instructions here"
          rows="10"
          className="border w-full p-2 font-roboto"
        ></textarea>
        {/* <input
          type="text"
          id="instructions"
          value={instructions}
          onChange={(e) => handleInputChange(e)}
          placeholder="Write your instructions here"
          className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        /> */}
        <p className="mt-4 text-lg text-black">
          Current Instructions:{" "}
          <span className="font-medium text-base">{instructions}</span>
        </p>
      </div>
    </div>
  );
};

export default VideoInstructionsInput;
