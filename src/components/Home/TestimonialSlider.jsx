import React, { useRef } from "react";
import Slider from "react-slick";
import testimonialperson from "../../assets/testimonialperson.png";
import trustpilot from "../../assets/trustpilot.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

 export const VerticalSlider = () => {
  const slides = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "DigitalRevolve Solutions",
      content:
        "Just Wow, I like the design and their incredible support. I had some queries and the support team replied within just an hour. Thanks",
    },
    {
      id: 2,
      name: "John Doe",
      company: "Tech Innovators",
      content:
        "Amazing experience! The service was fantastic and the team was very responsive.",
    },
    {
      id: 3,
      name: "Emma Brown",
      company: "Creative Agency",
      content:
        "Highly recommend! The quality of work exceeded my expectations.",
    },
    // Add more testimonials as needed
  ];

  const sliderRef = useRef(null); // Reference for the slider

  const settings = {
    dots: false, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: false,
          vertical: false,
        verticalSwiping: false,
        },
      },
      
    ],
  };

  // Function to go to the next slide
  const nextSlide = () => {
    console.log("Next button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    console.log("Previous button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="xl:container mx-auto my-10 relative overflow-hidden">
      {/* Position the buttons relative to the slider container */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-max">
            <div className="h-fit w-11/12 sm:w-10/12	my-6 lg:w-9/12	 xl:w-7/12 m-auto p-5 sm:p-10 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-5  justify-items-center sm:justify-items-center items-stretch	 bg-white  rounded-xl shadow-xl">
              <img
                src={testimonialperson}
                alt="User"
                className="w-full max-w-40 h-auto max-h-48 sm:col-span-1 hidden"
              />
              <div className="flex flex-col justify-evenly sm:gap-2 lg:gap-0 lg:justify-between sm:col-span-2">
                <div className="pb-5 sm:hidden">
                  <p className="font-bold text-large font-roboto">{slide.name}</p>
                  <p className="font-poppins font-semibold text-muted	text-small">{slide.company}</p>
                </div>
                <div className="sm:flex justify-between">
                  <div className="flex gap-1 pb-2">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < 4 ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6 5.833 1.417 8.295L12 18.896l-7.417 4.538 1.417-8.295-6-5.833 8.332-1.151L12 .587z"></path>
                      </svg>
                    ))}
                  </div>
                  <img
                    src={trustpilot}
                    alt="Review Source"
                    className="w-24 h-auto"
                  />
                </div>
                <div className="col-span-2 hidden sm:block">
                  <p className="text-small leading-normal font-poppins font-normal	text-muted">{slide.content}</p>
                  
                </div>
                <div className="pb-5 hidden sm:block">
                    <p className="font-bold text-large font-roboto">{slide.name}</p>
                    <p className="text-small font-poppins font-semibold	text-muted">{slide.company}</p>
                  </div>
              </div>
              <div className="col-span-2 sm:hidden">
                <p className="text-small leading-normal font-poppins font-normal	text-muted">{slide.content}</p>
                <div className="pb-5 hidden sm:block">
                  <p className="font-bold text-large font-roboto">{slide.name}</p>
                  <p className="font-poppins font-semibold text-small	text-muted">{slide.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Ensure buttons are contained within the slider's relative container */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[20px] lg:left-[60px] xl:left-[160px] 2xl:left-[200px] transform -translate-y-1/2 bg-primary text-white rounded-full shadow-lg p-2 hover:bg-secondary z-10 hidden md:block"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[20px] lg:right-[60px] xl:right-[160px] 2xl:right-[200px] transform -translate-y-1/2 bg-primary text-white rounded-full shadow-lg p-2 hover:bg-secondary z-10 hidden md:block"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default VerticalSlider;