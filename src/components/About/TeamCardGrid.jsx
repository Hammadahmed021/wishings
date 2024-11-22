import React from "react";
import TeamCard from "./TeamCard";
import StatsCard from "./StatsCard.jsx";
import { motion } from "framer-motion";
import { teamCardData, statsCardData } from "../../utils/localDb.js";

const TeamCardGrid = () => {
  return (
    <section className="xl:container xl:mx-auto text-center">
      <div
        className={`${"inline-block shadow-[0px_1px_40px_-4px_#a8a5a5] rounded-full "}`}
      >
        <p className="bg-primary text-background py-2 px-6 rounded-full font-roboto inline text-small">
          Team Members
        </p>
      </div>
      <h2 className="text-h3  font-bold text-gray-800 mt-4 md:mt-6">
        Meet Our Professional Team Members
      </h2>
      <div className="flex justify-center items-center mt-8 md:mt-14">
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-3 md:gap-y-6     xl:gap-8 w-full max-w-full">
          {teamCardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <TeamCard
                key={index}
                image={card.image}
                heading={card.heading}
                paragraph={card.paragraph}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-14 md:mt-20">
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
          {statsCardData.length > 0
            ? statsCardData?.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <StatsCard
                    heading={card?.heading}
                    paragraph={card?.paragraph}
                    endValue={card?.endValue || 0}
                    sign={card?.sign}
                  />
                </motion.div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default TeamCardGrid;
