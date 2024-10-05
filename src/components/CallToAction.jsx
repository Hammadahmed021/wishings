import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const CallToAction = () => {
  return (
    <section className="bg-primary">
      <div className="xl:container xl:m-auto  flex flex-col lg:flex-row ">
        <div className="flex flex-col gap-10 lg:w-1/2 p-10">
          <div>
            <p className="bg-[#BA7900] text-background py-1 px-6 rounded-full font-roboto inline">
              Our clients
            </p>
          </div>
          <h2 className="text-h2 font-roboto text-background">
            Integration Solutions: Connect Seamlessly with Leading Tools
          </h2>
          <p className="font-poppins text-small text-background">
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
          <div>
            <a
              href="#"
              className="bg-secondary align-middle py-3 px-8 text-background rounded-full font-roboto cursor-pointer transition-shadow duration-300 hover:shadow-md hover:shadow-gray-700"
            >
              Contact now
              <span className="inline-block align-middle	text-background text-[30px] pl-2">
                <IoIosArrowRoundForward />
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-6 mt-4 shadow-inner m-2 mr-0 p-8 rounded-l-xl">
          <h3 className="text-h3 font-roboto text-background">Freedom to integrate all the tools you need</h3>
          <p className="font-poppins text-small text-background">
            At Next you can seamlessly integrates with a variety of industry-
            leading tools, ensuring a cohesive and efficient digital ecosystem
            for your business.
          </p>
        </div>
      </div>
    </section>
  );
};
