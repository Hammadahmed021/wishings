import React from "react";
import ContactForm from "../ContactForm";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <section
      className={`xl:container xl:mx-auto flex flex-col lg:flex-row  gap-6 lg:gap-12 xl:gap-20 items-center  `}
    >
      {/* Text Section */}
      <div className="lg:basis-1/2 flex flex-col gap-3 ">
        <div className=" text-center md:text-left mb-6">
          <p className="text-primary font-roboto text-lg">
            We’re Here to Help
          </p>
        </div>
        <h2 className="text-h3 font-roboto font-bold text-gray-800 ">
          Reach Out to Us Anytime!
        </h2>
        <p className="text-muted 0 text-small font-poppins">
          Don’t hesitate to connect with our friendly team. Whether you have a question, need assistance, or just want to say hello,
          we’re always happy to hear from you!


        </p>
        <div className="space-y-6 mt-6">
          <a
            href="mailto:someone@example.com"
            className="text-medium text-muted font-poppins flex items-start sm:items-center gap-4"
          >
            <FaEnvelope className="text-primary" size={18} />
            <span>info@example.com</span>
          </a>

          <div className="flex items-start sm:items-center gap-4">
            <FaMapMarkerAlt className="text-primary" size={18}/>
            <p className="text-medium text-muted font-poppins">
              55 Main Street, 2nd block, Malborne, Australia
            </p>
          </div>
        </div>

      </div>

      {/* Image Section */}
      <div className={`w-full lg:basis-1/2`}>
        <ContactForm />
      </div>
    </section>
  );
};
