import React from "react";
import heroImage from '../assets/heroImage.png'

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center text-center py-10 px-6 font-roboto bg-gradient-to-b from-accent to-background ">
        <h1 className="text-h1">Flexible Editing, Stunning Clips</h1>
        <p className="mt-4 md:mt-6 max-w-96	md:max-w-fit text-center text-muted font-normal text-medium">
          Create smarter and faster with AI tools and tons of resources.
        </p>
        <div>
          <img src={heroImage} alt="hero" className="pt-6 md:mt-10"/>
        </div>
      </div>
    </section>
  );
};
