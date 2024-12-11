import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ pageName, className }) => {
  return (
    <section className={` relative py-8 md:py-16 lg:py-20 text-center shadow-[inset_0px_50px_31px_-31px_#FEA5001A] `}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`${className} h-full w-full`}></div>
      </div>

      {/* Page Name */}
      <h1 className="text-4xl text-h1 text-black font-roboto font-bold mb-4">
        {pageName}
      </h1>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 font-poppins">
        <Link to="/" className=" hover:text-primary transition duration-500 ease-in-out text-medium">
          Home
        </Link>
        <span className="mx-2 text-gray-400 text-medium">{">"}</span>
        <span className="font-medium text-medium text-primary underline">{pageName}</span>
      </div>
    </section>
  );
};

export default Hero;
