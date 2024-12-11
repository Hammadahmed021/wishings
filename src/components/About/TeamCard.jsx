import React from 'react';

const Card = ({ image, heading, paragraph }) => {
  return (
    <div className="group w-full overflow-hidden bg-white hover:bg-primary p-0 shadow-[0px_0px_9px_-3px_#a8a5a5] rounded-lg transition-colors duration-300">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className="object-full mx-auto"
      />

      {/* Content */}
      <div className="p-6 text-left">
        <h2 className="group-hover:text-white text-large font-bold text-black  capitalize font-roboto mb-2 transition-colors duration-300">
          {heading}
        </h2>
        <p className="group-hover:text-white text-small text-muted font-poppins transition-colors duration-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
