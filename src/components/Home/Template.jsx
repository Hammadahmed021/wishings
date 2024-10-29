import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { templates } from "../../utils/localDb.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import react-swipeable to handle swipe gestures
import { useSwipeable } from "react-swipeable";

const categories = [
  "Birthday",
  "Convocation",
  "Christmas",
  "Wedding",
  "Engagement",
];

const VideoSlider = ({ videos, direction, onVideoClick  }) => {
  const sliderRef = useRef(null); // Reference to access slider methods

  const settings = {
    infinite: true,
    speed: 4500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Autoplay by default
    cssEase: "linear",
    pauseOnHover:true,
    dots: false,
    autoplaySpeed: 0,
    rtl: direction === "right", // Reverse direction for the second slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: false,
          cssEase: "ease",
          speed: 1200,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    sliderRef.current.slickPause(); // Pause slider
    onHover(true);
  };

  // Resume autoplay on hover out
  const handleMouseLeave = () => {
    sliderRef.current.slickPlay(); // Resume slider
    onHover(false);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => sliderRef.current.slickNext(), // Move to the next slide on swipe left
    onSwipedRight: () => sliderRef.current.slickPrev(), // Move to the previous slide on swipe right
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} >
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-2"
            onClick={() => onVideoClick(video.id)}
          >
            <video
              src={video.url}
              className="w-full h-full object-cover rounded-xl min-h-44 hover:cursor-pointer"
              autoPlay
              loop
              muted
            ></video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CategoryButtons = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex md:justify-center space-x-4 mb-6">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-small ${
            selectedCategory === category
              ? "first:text-primary first:border-primary text-primary border border-primary rounded-full"
              : "text-black font-medium"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const TemplateSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleVideoClick = (id) => {
    navigate(`/Wishing/template/${id}`);
  };

  return (
    <div className="container mx-auto px-4 -mt-8 md:mt-20 lg:-mt-1 2xl:-mt-24">
      <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
        Start Fast with <span className="text-primary">6000+</span> Templates
      </h3>
      <CategoryButtons
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <div className="overflow-hidden">
        <div className="w-full">
          <VideoSlider
            videos={templates[selectedCategory]}
            direction="left"
            onVideoClick={handleVideoClick} 
          />
        </div>
        <div className="w-full">
          <VideoSlider
            videos={templates[selectedCategory]}
            direction="right"
            onVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateSlider;


// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import axios from "axios"; // Import axios for API requests
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import react-swipeable to handle swipe gestures
// import { useSwipeable } from "react-swipeable";

// const categories = [
//   "Category 1",
//   "Category 2",
//   "Category 3",
//   "Category 4",
//   "Category 5",
//   "Category 6",
//   "Category 7",
//   "Category 8",
// ];

// const VideoSlider = ({ videos, direction }) => {
//   const settings = {
//     infinite: true,
//     speed: 5000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 100,
//     rtl: direction === "right",
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           speed: 4000,
//           autoplaySpeed: 1200,
//           cssEase: "ease",
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 4000,
//           autoplaySpeed: 1200,
//           cssEase: "ease",
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {videos.map((video, index) => (
//         <div key={index} className="p-2">
//           <video
//             src={video}
//             className="w-full h-[100px] lg:h-[300px] object-cover rounded-3xl min-h-80 hover:cursor-pointer"
//             autoPlay
//             loop
//             muted
//           ></video>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// const TemplateSlider = () => {
//   const [videos, setVideos] = useState([]);
//   const PEXELS_API_KEY = "NWqAgIgbChSXhDrfdauXvNM6heHsKUxML5Ou0ozDwCRiUp8Dpa7B0Jcq"; // Replace with your actual Pexels API Key

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.pexels.com/videos/search?query=nature&per_page=10", // Replace "nature" with any category you want to test
//           {
//             headers: {
//               Authorization: PEXELS_API_KEY,
//             },
//           }
//         );

//         // Map to get video URLs from the response
//         const videoUrls = response.data.videos.map(
//           (video) => video.video_files[0].link
//         );
//         setVideos(videoUrls);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 -mt-8 md:mt-20 lg:-mt-1 2xl:-mt-24">
//       <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
//         Start Fast with <span className="text-primary">6000+</span> Templates
//       </h3>
//       <div className="space-y-6">
//         <div className="w-full">
//           <VideoSlider videos={videos} direction="left" />
//         </div>
//         <div className="w-full">
//           <VideoSlider videos={videos} direction="right" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemplateSlider;
