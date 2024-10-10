import React from "react";
import * as image from "../../assets/images/index.js";

 const Rating = () => {
  return (
    <section>
      <div className="xl:container xl:mx-auto flex flex-col lg:basis-1/3 gap-10 lg:gap-2 lg:flex-row p-6 md:p-8 bg-accent xl:rounded-2xl">
        <div className="flex gap-5 items-center lg:basis-2/4	">
          <div className="flex flex-col md:flex-row bg-[#af302a] content-center py-4 px-4 md:py-8 md:px-8 gap-2 md:gap-5 rounded-xl flex-none">
            <div>
              <p className="text-white text-xl leading-5 md:text-3xl font-extrabold font-roboto tracking-widest md:pb-1">
                4.9
              </p>
              <span className="text-xs md:text-small  text-white font-poppins font-light">
                3k Rating
              </span>
            </div>
            <div className=" hidden md:block md:w-px md:h-[65px] md:bg-background"></div>
            <div className="w-full h-px md:hidden bg-background "></div>
            <div>
              <p className="text-white text-xl leading-5 md:text-3xl font-extrabold font-roboto tracking-widest md:pb-1">
                10k+
              </p>
              <span className="text-xs md:text-small  text-white font-poppins font-light">
                Happy Users
              </span>
            </div>
          </div>
          <div>
            <p className="align-middle text-medium">
              Trusted by over 10,000+ customers and well wishers from all over
              the world since 2012
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:basis-2/4 lg:flex-nowrap text-center justify-evenly gap-10">
          <div className="flex gap-2 items-center">
            <div>
              <img src={image.google} alt="google" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-small text-muted font-semibold">
                Google Rating
              </p>
              <div className="flex gap-2 h-5 items-center">
                <span className="text-primary text-small tracking-wider font-bold">
                  4.8
                </span>
                <img src={image.stars} alt="stars" />
              </div>
              <a href="#" className="text-muted text-[14px] font-normal">
                See all our reviews
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src={image.goodfirms} alt="google" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-small text-muted font-semibold">
                Goodfirms Rating
              </p>
              <div className="flex gap-2 h-5 items-center">
                <span className="text-primary text-small tracking-wider font-bold">
                  4.9
                </span>
                <img src={image.stars} alt="stars" />
              </div>
              <a href="#" className="text-muted text-[14px] font-normal">
                See all our reviews
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src={image.clutch} alt="google" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-small text-muted font-semibold">
                Clutch Rating
              </p>
              <div className="flex gap-2 h-5 items-center">
                <span className="text-primary text-small tracking-wider font-bold">
                  4.7
                </span>
                <img src={image.stars} alt="stars" />
              </div>
              <a href="#" className="text-muted text-[14px] font-normal">
                See all our reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;