import React from "react";
import { Testimonial, FAQ, NewsletterSubscribe } from "../components/Home";
import Hero from "../components/About/Hero";
import TextImageSection from "../components/About/TextImageSection";
import TeamCardGrid from "../components/About/TeamCardGrid";
import AnimatedSection from "../components/AnimatedSection ";

const AboutUs = () => {
  return (
    <>
      <AnimatedSection animation="fade-up">
        <Hero
          pageName="About Us"
          className={`pattern-boxes pattern-gray-500 pattern-bg-white  pattern-size-12 pattern-opacity-5`}
        />
      </AnimatedSection>
    
      <div className="py-10 md:py-20 px-8">
        {/* First Section: Text on Left, Image on Right */}
        <TextImageSection
          heading="Our Mission"
          paragraph="We strive to provide exceptional value to our customers by focusing on quality and innovation."
          bullets={[
            {
              heading: "Excellence",
              paragraph: "We deliver the best in everything we do.",
            },
            {
              heading: "Integrity",
              paragraph: "We uphold the highest standards of integrity.",
            },
          ]}
          image="https://via.placeholder.com/400"
          reverse={false} // Image on right
        />

        <div className="pt-5 md:mt-12">
          {/* Second Section: Image on Left, Text on Right */}
          <TextImageSection
            heading="Our Vision"
            paragraph="To be the most trusted provider in our industry while fostering a positive community impact."
            bullets={[
              {
                heading: "Innovation",
                paragraph: "We continually embrace change and improvement.",
              },
              {
                heading: "Community",
                paragraph: "We prioritize giving back to our community.",
              },
            ]}
            image="https://via.placeholder.com/400"
            reverse={true} // Image on left
          />
        </div>
      </div>
      {/* <div className="bg-accent py-10 md:py-20 px-6">
        <TeamCardGrid />
      </div> */}

      <FAQ />
      {/* <Testimonial /> */}
      <NewsletterSubscribe />
    </>
  );
};

export default AboutUs;
