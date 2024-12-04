import React from "react";
import heroImage from "../../assets/heroImage.png";
import hero from "../../assets/Videos/Hero/hero.mp4";
import { Button } from "../common/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-accent from-10% to-background">
      <div className="flex  flex-col items-center text-center py-10 px-6 md:pt-24 md:pb-16 font-roboto">
        <h1 className="text-h1 font-roboto">Share Love with Wishings</h1>
        <p className="mt-4 max-w-96 md:max-w-fit text-center text-muted font-normal text-small md:text-medium">
          Choose from our beautiful templates and send a wish that will be
          cherished forever.
        </p>
        <p className="mt-4 max-w-96 md:max-w-fit text-center text-muted font-normal text-small md:text-medium xl:mx-44">
          Pick a template, share your photos and message, and leave the rest to
          us. We’ll create a stunning, custom video with music, transitions, and
          everything in between. All you have to do is place the order!
        </p>
        <Button link="#" x={10} text="Get Your Video Now" />
        <div className="w-full pt-6 md:mt-10">
          <video className="w-full" controls autoPlay muted loop>
            <source src={hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
