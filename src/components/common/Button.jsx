import React from "react";

export const Button = ({link, x, text}) => {
  return (
    <a
      href={link}
      className={`px-${x} mt-4 md:mt-8 py-3 text-background text-small font-roboto bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end  rounded-full shadow-none transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400`}
    >
      {text}
    </a>
  );
};

