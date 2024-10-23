import React from "react";
import { VerticalSlider } from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="relative px-8 ">
          <p className="text-small text-center font-roboto">Social Proof</p>
          <h2 className="text-h2 text-center pt-3 font-roboto">
            Loved by Thousands, Trusted for Every Occasion
          </h2>
        </div>
        <div className="min-h-96 md:min-h-fit">
          <VerticalSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
