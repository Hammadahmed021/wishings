import React from "react";
import { Button } from "../common/Button";

const TextImageSection = ({ heading, paragraph, bullets, image, reverse }) => {
  return (
    <section
      className={`xl:container xl:mx-auto flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center  `}
    >
      {/* Text Section */}

      <div className="flex-1 text-center md:text-left">
        <div
          className={`${
            reverse
              ? "hidden"
              : "inline-block shadow-[0px_1px_40px_-4px_#FEA500] rounded-full "
          }`}
        >
          <p className="bg-primary text-background py-2 px-6 rounded-full font-roboto inline text-small">
            About Company
          </p>
        </div>
        <h2 className="text-h3  font-bold text-gray-800 mb-4 mt-6">
          {heading}
        </h2>
        <p className="text-gray-600 mb-6 text-medium font-poppins">{paragraph}</p>
        <ul className="space-y-4 list-none md:list-disc pl-5 marker:text-primary marker:text-[20px] marker:align-text-bottom">
          {bullets.map((bullet, index) => (
            <li key={index}>
              <h3 className="text-medium font-semibold text-gray-700">
                {bullet.heading}
              </h3>
              <p className="text-gray-600 text-small font-poppins">{bullet.paragraph}</p>
            </li>
          ))}
        </ul>
        <div className="my-8">
          {reverse && <Button link="#" x="10" text="Learn More" />}
        </div>
      </div>

      {/* Image Section */}
      <div className={`${reverse ? "md:mr-6 2xl:mr-0":"ml-0 md:ml-6 2xl:ml-0"} flex-1 `}>
        <img
          src={image}
          alt={heading}
          className={`w-[630px] h-[445px] object-cover rounded-lg shadow-lg ${
            reverse ? "ml-0" : "mr-0"
          }`}
        />
      </div>
    </section>
  );
};

export default TextImageSection;
