import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, animationType = "fade-up", delay = 0 }) => {
  // Define animation variants
  const variants = {
    "fade-up": { opacity: 0, y: 30 },
    "fade-down": { opacity: 0, y: -30 },
    "fade-left": { opacity: 0, x: -30 },
    "fade-right": { opacity: 0, x: 30 },
  };

  return (
    <motion.div
      initial={variants[animationType]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
