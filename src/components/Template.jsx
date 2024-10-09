import React, { useState } from "react";
import Slider from "react-slick";
import { templates } from "../utils/localDb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import react-swipeable to handle swipe gestures
import { useSwipeable } from "react-swipeable";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
  "Category 8",
];

const VideoSlider = ({ videos, direction }) => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3, // You can adjust the number of visible slides here
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: direction === "right", // Reverse direction for the second slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 4000,

          cssEase: "ease",
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 4000,

          cssEase: "ease",
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {videos.map((video, index) => (
        <div key={index} className="p-2">
          <video
            src={video}
            className="w-full h-full object-cover rounded-3xl min-h-80	hover:cursor-pointer	"
            autoPlay
            loop
            muted
          ></video>
        </div>
      ))}
    </Slider>
  );
};

const CategoryButtons = ({ onSelectCategory, selectedCategory }) => {
  // Swiping handler for mobile devices
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    const currentIndex = categories.indexOf(selectedCategory);
    if (direction === "left" && currentIndex < categories.length - 1) {
      onSelectCategory(categories[currentIndex + 1]);
    } else if (direction === "right" && currentIndex > 0) {
      onSelectCategory(categories[currentIndex - 1]);
    }
  };

  return (
    <div
      {...handlers}
      className="overflow-x-auto whitespace-nowrap flex lg:justify-center space-x-4 mb-6 "
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-small ${
            selectedCategory === category
              ? "first:text-primary first:border-primary text-primary border border-primary rounded-full"
              : "text-black font-medium	"
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
  const [selectedCategory, setSelectedCategory] = useState("Category 1");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 -mt-8 md:mt-20 lg:-mt-1 2xl:-mt-24">
      <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
        Start Fast with <span className="text-primary">6000+</span> Templates
      </h3>
      {/* Category Buttons with Swiping */}
      <CategoryButtons
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      {/* Sliders */}
      <div className="space-y-6">
        <div className="w-full ">
          <VideoSlider videos={templates[selectedCategory]} direction="left" />
        </div>
        <div className="w-full">
          <VideoSlider videos={templates[selectedCategory]} direction="right" />
        </div>
      </div>
      {/* <div className="mt-6 text-center">
        <Link  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          See All
        </Link>
      </div> */}
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
