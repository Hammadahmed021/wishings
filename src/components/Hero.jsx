import React from "react";
import heroImage from '../assets/heroImage.png'

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-accent from-10% to-background"> 
      <div className="flex lg:container mx-auto flex-col items-center text-center py-10 px-6 md:pt-24 md:pb-16 font-roboto">
        <h1 className="text-h1">Flexible Editing, Stunning Clips</h1>
        <p className="mt-4 max-w-96	md:max-w-fit text-center text-muted font-normal text-small md:text-medium">
          Create smarter and faster with AI tools and tons of resources.
        </p>
        <a href="#" className="mt-4 md:mt-8 py-3 px-10 text-background text-small font-roboto bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end  rounded-full">Create by Templates</a>
        <div>
          <img src={heroImage} alt="hero" className="pt-6 md:mt-10"/>
        </div>
      </div>
    </section>
  );
};