import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import the swipeable hook
import * as icon from "../assets/icons/offerIcon.js";

const offers = [
  {
    id: 1,
    icon: icon.fastforward,
    title: "Offer 1",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 2,
    icon: icon.fastforward,
    title: "Offer 2",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 3,
    icon: icon.fastforward,
    title: "Offer 3",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 4,
    icon: icon.fastforward,
    title: "Offer 4",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 5,
    icon: icon.fastforward,
    title: "Offer 5",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 6,
    icon: icon.fastforward,
    title: "Offer 6",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 7,
    icon: icon.fastforward,
    title: "Offer 7",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 8,
    icon: icon.fastforward,
    title: "Offer 8",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 9,
    icon: icon.fastforward,
    title: "Offer 9",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 10,
    icon: icon.fastforward,
    title: "Offer 10",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 11,
    icon: icon.fastforward,
    title: "Offer 11",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 12,
    icon: icon.fastforward,
    title: "Offer 12",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 13,
    icon: icon.fastforward,
    title: "Offer 13",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
  {
    id: 14,
    icon: icon.fastforward,
    title: "Offer 14",
    description:
      "Identify relevant and high-impact keywords for your industry.",
  },
];

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState(""); // 'left' or 'right'

  // Split the offers into groups of 6
  const offerGroups = [];
  for (let i = 0; i < offers.length; i += 6) {
    const group = offers.slice(i, i + 6);
    if (group.length > 0) {
      offerGroups.push(group);
    }
  }

  // Handle swiping
  const handleSwipeLeft = () => {
    if (currentIndex < offerGroups.length - 1) {
      setSliding(true);
      setSlideDirection("right");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSliding(false);
      }, 300);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setSliding(true);
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setSliding(false);
      }, 300);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe on mouse events as well
  });

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setSliding(true);
      setSlideDirection(index > currentIndex ? "right" : "left"); // Determine the direction of the slide
      setTimeout(() => {
        setCurrentIndex(index);
        setSliding(false);
      }, 300); // Duration of the slide animation
    }
  };

  return (
    <section>
      <div className="container mx-auto overflow-hidden" {...swipeHandlers}>
        <div className="relative overflow-hidden px-8 pt-20">
          <p className="text-small text-center">Our Services</p>
          <h2 className="text-h2 text-center pt-3">What We Are Offering</h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:min-h-[400px] md:min-h-[650px]	 gap-6 md:gap-12 my-10 md:mt-16 md:mb-10 mx-0 md:mx-4 xl:mx-32 transition-transform duration-300 transform ${
              sliding
                ? slideDirection === "right"
                  ? "-translate-x-full" // Slide out to the left
                  : "translate-x-full" // Slide out to the right (if moving backward)
                : "translate-x-0"
            }`}
          >
            {offerGroups[currentIndex].map((offer) => (
              <div key={offer.id} className="p-4">
                <img src={offer.icon} alt="icon" />
                <h6 className="py-4 font-roboto font-extrabold text-xl text-[#001F3F]">
                  {offer.title}
                </h6>
                <p className="font-poppins text-[#5C6671] text-base">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator as Navigation */}
        <div className="flex justify-center mt-4">
          {offerGroups.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2  rounded-full mx-2 cursor-pointer transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-primary border-1 border-background outline outline-1	outline-offset-2	outline-primary"
                  : "bg-gray-400 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSlider;
