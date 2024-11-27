import React from "react";
import Hero from "../components/About/Hero";
import AnimatedSection from "../components/AnimatedSection ";
import { ContactUs } from "../components/Contact/ContactUs";

const Contact = () => {
  return (
    <>
      
        <AnimatedSection animation="fade-up">
          <Hero
            pageName="Contact Us"
            className={`pattern-boxes pattern-gray-500 pattern-bg-white  pattern-size-12 pattern-opacity-5`}
          />
        </AnimatedSection>
        <div className="py-10 px-6">
        <ContactUs />
      </div>
    </>
  );
};

export default Contact;
