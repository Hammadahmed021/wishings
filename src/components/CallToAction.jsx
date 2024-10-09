import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const CallToAction = () => {
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
            Integration Solutions: Connect Seamlessly with Leading Tools
          </h2>
          <p className="font-poppins text-small text-background leading-relaxed font-light">
            Next Agency seamlessly integrates with a variety of industry-leading
            tools, ensuring a cohesive and efficient digital ecosystem for your
            business. Next Agency seamlessly integrates with a variety of
            industry-leading tools, ensuring a cohesive and efficient digital
            ecosystem for your business. Next Agency seamlessly integrates with
            a variety of industry-leading tools, ensuring a cohesive and
            efficient digital ecosystem for your business. Next Agency
            seamlessly integrates with a variety of industry-leading tools,
            ensuring a cohesive and efficient digital ecosystem for your
            business. Next Agency seamlessly integrates with a variety of
            industry-leading tools, ensuring a cohesive and efficient digital
            ecosystem for yo
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
          Style="box-shadow: -10px -10px 15px -16px rgba(0, 0, 0, 0.3);"
        >
          <div className="py-6 px-0 lg:py-14 lg:px-10">
            <h3 className="text-h3 font-roboto text-background">
              Freedom to integrate all the tools you need
            </h3>
            <p className="font-poppins text-small text-background font-light leading-relaxed pt-5">
              At Next you can seamlessly integrates with a variety of industry-
              leading tools, ensuring a cohesive and efficient digital ecosystem
              for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
