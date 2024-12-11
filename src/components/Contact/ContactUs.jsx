import React from "react";
import ContactForm from "../ContactForm";

export const ContactUs = () => {
  return (
    <section
      className={`xl:container xl:mx-auto flex flex-col lg:flex-row  gap-6 lg:gap-12 xl:gap-20 items-center  `}
    >
      {/* Text Section */}
      <div className="lg:basis-1/2 flex flex-col gap-3 ">
        <div className=" text-center md:text-left mb-6">
          <p className="bg-primary text-background py-2 px-6 rounded-full font-roboto inline text-small">
            About Company
          </p>
        </div>
        <h2 className="text-h3 font-roboto font-bold text-gray-800 ">
          Don’t Hessite to Contact Our Team Member
        </h2>
        <p className="text-muted 0 text-small font-poppins">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium, totam rem aperiam
        </p>
        <a
          href="mailto:someone@example.com"
          className="text-medium text-black transition duration-500 hover:text-primary underline font-poppins"
        >
          info@example.com
        </a>
        <p className="text-medium text-muted font-poppins">
          55 Main Street, 2nd block, Malborne, Australia
        </p>
        <a
          href="tel:+1234567890"
          className="text-medium text-black transition duration-500 hover:text-primary underline font-poppins"
        >
         +1 (234) 567-890
        </a>
      </div>

      {/* Image Section */}
      <div className={`w-full lg:basis-1/2`}>
        <ContactForm />
      </div>
    </section>
  );
};
