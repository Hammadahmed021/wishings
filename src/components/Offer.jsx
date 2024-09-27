import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import the React Slick component
import * as icon from "../assets/icons/offerIcon.js";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { offers } from "../utils/localDb.js";



const OfferSlider = () => {
  // State to manage the number of items per group
  const [itemsPerGroup, setItemsPerGroup] = useState(2);

  // Function to update the group size based on screen width
  const updateItemsPerGroup = () => {
    if (window.innerWidth < 768) {
      setItemsPerGroup(3); // Set group size to 1 on screens smaller than the 'sm' breakpoint (640px)
    } 
    else {
      setItemsPerGroup(2); // Set group size to 6 for larger screens
    }
  };

  // Use effect to watch for screen resize
  useEffect(() => {
    updateItemsPerGroup(); // Initial check on component mount
    window.addEventListener("resize", updateItemsPerGroup); // Add event listener for resize
    return () => window.removeEventListener("resize", updateItemsPerGroup); // Clean up on unmount
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesPerRow: 3,
    customPaging: function (i) {
      return (
        <button className="bg-primary h-4"></button>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };

  // Split the offers into groups based on the itemsPerGroup value
  const offerGroups = [];
  for (let i = 0; i < offers.length; i += itemsPerGroup) {
    const group = offers.slice(i, i + itemsPerGroup);
    if (group.length > 0) {
      offerGroups.push(group);
    }
  }

  return (
    <section>
      <div className="container mx-auto px-0 lg:px-10 xl:px-20 2xl:px-36">
        <div className="relative px-8 pt-20">
          <p className="text-small text-center">Our Services</p>
          <h2 className="text-h2 text-center pt-3 font-roboto">What We Are Offering</h2>

          {/* Slick Slider */}
          <Slider {...settings}>
            {offerGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.map((offer) => (
                  <div key={offer.id} className="px-2 pt-10 md:px-6 md:py-8">
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
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OfferSlider;
