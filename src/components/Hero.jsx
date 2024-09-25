import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 font-roboto">
      <h1 className="text-6xl sm:text-6xl lg:text-7xl text-center tracking-tight font-bold">
        Flexible Editing, Stunning Clips
      </h1>
      <p className="mt-6 text-center text-neutral-500 max-w-4xl font-normal text-[20px]">
        Create smarter and faster with AI tools and tons of resources.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Create by Templates
        </a>
      </div>
    </div>
  );
};
