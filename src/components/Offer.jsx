import React, { useState } from 'react';

const offers = [
  { id: 1, title: "Offer 1" },
  { id: 2, title: "Offer 2" },
  { id: 3, title: "Offer 3" },
  { id: 4, title: "Offer 4" },
  { id: 5, title: "Offer 5" },
  { id: 6, title: "Offer 6" },
  { id: 7, title: "Offer 7" },
  { id: 8, title: "Offer 8" },
  { id: 9, title: "Offer 9" },
  { id: 10, title: "Offer 10" },
  { id: 11, title: "Offer 11" },
  { id: 12, title: "Offer 12" },
  { id: 13, title: "Offer 13" }, // Example of more offers
];

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split the offers into groups of 6
  const offerGroups = [];
  for (let i = 0; i < offers.length; i += 6) {
    const group = offers.slice(i, i + 6);
    if (group.length > 0) {
      offerGroups.push(group);
    }
  }

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {offerGroups[currentIndex].map((offer) => (
          <div key={offer.id} className="border p-4 text-center">
            {offer.title}
          </div>
        ))}
      </div>

      {/* Dots Indicator as Navigation */}
      <div className="flex justify-center mt-4">
        {offerGroups.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full mx-2 cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-400 hover:bg-blue-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
