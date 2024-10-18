import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ctaOffer from "../../assets/ctaOffer.jpg";

const CallToAction = () => {
  return (
    <section className="bg-primary">
      <div className="xl:container xl:m-auto  flex flex-col lg:flex-row py-6 gap-8 lg:py-20">
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2 pt-12 pb-6 px-10 lg:px-8 lg:py-0">
          <div>
            <p className="bg-[#BA7900] text-background py-1 px-6 rounded-full font-roboto inline">
              Our clients
            </p>
          </div>
          <h2 className="text-h2 font-roboto text-background leading-tight	">
            We Made Videos for Your Special Occasions!
          </h2>
          <p className="font-poppins text-small text-background leading-relaxed font-light">
            Celebrate in style and save big with Wishings! For a limited time,
            enjoy a flat 30% discount on your very first personalized video
            order. This is the perfect chance to create a unique, heartfelt
            video for any special moment in your life. Simply choose your
            favorite template, send us your details, and we’ll handle the rest.
            Don’t miss out on this amazing deal – it’s our way of helping you
            make unforgettable memories for less. Order now and bring your
            celebration to life with Wishings!
            video for any special moment in your life. Simply choose your
            favorite template, send us your details, and we’ll handle the rest.
            Don’t miss out on this amazing deal – it’s our way of helping you
            make unforgettable memories for less. Order now and bring your
            celebration to life with Wishings!
          </p>
          <div className="mt-2">
            <a
              href="#"
              className="bg-secondary align-middle py-4 px-10 text-background rounded-full font-roboto cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              Contact now
              <span className="inline-block align-middle	text-background text-[30px] pl-2">
                <IoIosArrowRoundForward />
              </span>
            </a>
          </div>
        </div>
        <div
          className="flex flex-col lg:w-1/2 gap-6 rounded-3xl m-1 p-7 lg:p-0 "
          style={{ boxShadow: "-10px -10px 15px -16px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="py-6 px-0 lg:py-14 lg:px-10">
            <h3 className="text-h3 font-roboto text-background">
              Flat 30% Off Your First Personalized Video!
            </h3>
            {/* <p className="font-poppins text-small text-background font-light leading-relaxed pt-5">
              At Next you can seamlessly integrates with a variety of industry-
              leading tools, ensuring a cohesive and efficient digital ecosystem
              for your business.
            </p> */}
            <img src={ctaOffer} alt="offer" className="mt-4 rounded-lg w-full lg:w-[430px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
