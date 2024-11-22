import React from 'react';

const Card = ({ image, heading, paragraph }) => {
  return (
    <div className="w-full overflow-hidden bg-white hover:bg-secondary p-0 shadow-[0px_0px_9px_-3px_#a8a5a5] rounded-lg transition-colors duration-300">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className="object-full mx-auto"
      />

      {/* Content */}
      <div className="p-6 text-left">
        <h2 className="text-large font-bold text-black hover:text-white capitalize font-roboto mb-2 transition-colors duration-300">
          {heading}
        </h2>
        <p className="text-small text-gray-600 hover:text-gray-300 font-poppins transition-colors duration-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
