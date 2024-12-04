import React from "react";

const LoaderComp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-b-transparent border-green-500 animate-spin [animation-duration:1.5s]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-l-transparent border-red-500 animate-spin [animation-duration:2s]"></div>
      </div>
    </div>
  );
};

export default LoaderComp;
