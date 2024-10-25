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
            For a limited time, enjoy a flat 30% discount on your first
            personalized video order. Be it a birthday, engagement, convocation,
            Christmas, or any other special occasion, we’re here to help you
            mark these moments with something truly special. This is the perfect
            opportunity to create a unique, heartfelt video that will leave a
            lasting impression on your loved ones, ensuring they’ll treasure it
            for years to come. Simply browse through our beautiful collection of
            templates, select your favorite, and provide us with the
            details—photos, messages, and more. We’ll take care of the rest,
            crafting a stunning video that perfectly captures the essence of
            your celebration. Our expert team is dedicated to making sure your
            video reflects the joy and emotion of the moment, making your
            memories truly unforgettable for life. Don’t miss out on this
            amazing offer—order now and let Wishings turn your special moments
            into cherished memories in the most meaningful way possible!
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
              Celebrate in style and save big with Wishings!
            </h3>
            {/* <p className="font-poppins text-small text-background font-light leading-relaxed pt-5">
              At Next you can seamlessly integrates with a variety of industry-
              leading tools, ensuring a cohesive and efficient digital ecosystem
              for your business.
            </p> */}
            <img
              src={ctaOffer}
              alt="offer"
              className="mt-4 rounded-lg w-full lg:w-[430px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
