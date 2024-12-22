import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { templates } from "../../utils/localDb.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Import react-swipeable to handle swipe gestures
import { useSwipeable } from "react-swipeable";
import { getCategoryWithVideos } from "../../utils/Api.js";

const categories = [
  "Birthday",
  "Convocation",
  "Christmas",
  "Wedding",
  "Engagement",
];

const VideoSlider = ({ videos, direction, onVideoClick, selectedCategory }) => {
  const sliderRef = useRef(null); // Reference to access slider methods

  const settings = {
    infinite: true,
    speed: 4500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Autoplay by default
    cssEase: "linear",
    pauseOnHover: true,
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
    <div {...handlers}>
      {/* <Slider ref={sliderRef} {...settings}> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-2"
            onClick={() =>
              onVideoClick({ ...video, categoryName: selectedCategory?.name })
            }
          >
            <video
              src={video.video_path}
              className="w-full h-full object-cover rounded-xl max-h-72 hover:cursor-pointer"
              autoPlay
              loop
              muted
            ></video>
          </div>
        ))}
      {/* </Slider> */}
      </div>
    </div>
  );
};

const CategoryButtons = ({
  onSelectCategory,
  selectedCategory,
  allCategory,
}) => {
  console.log(
    "selectedCategoryselectedCategoryselectedCategory",
    selectedCategory
  );
  return (
    <div className="overflow-x-auto whitespace-nowrap flex md:justify-center space-x-4 mb-6">
      {allCategory.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-small ${
            selectedCategory?.id === category?.id
              ? "first:text-primary first:border-primary text-primary border border-primary rounded-full"
              : "text-black font-medium"
          }`}
          onClick={() => onSelectCategory(category, index)}
        >
          {category?.name}
        </button>
      ))}
    </div>
  );
};

const TemplateSlider = () => {

  const [allCategory, setAllCategory] = useState([]);


  const getCategory =async () => {
    const { status, data } = await getCategoryWithVideos()
    console.log("lsdbvklsbdvklsbdlvkbsdklvblsdbvksdblvsdblkv",data)
    if (status == 200) {
      setSelectedCategory(data?.categories[0] ?? []);
      setAllCategory(data?.categories ?? []);
    }
    

  }

  useEffect(() => {
    getCategory()
  },[])

  console.log(allCategory, 'allCategory');
  

  const [selectedCategory, setSelectedCategory] = useState(allCategory[0]);
  const navigate = useNavigate();

  const handleCategoryChange = (category,index) => {
    setSelectedCategory({...category,index});
  };

  const handleVideoClick = (obj) => {
    navigate(`/template/${obj?.id}`,{state:obj});
  };

  return (
    <div className="container mx-auto px-4 -mt-8 md:mt-20 lg:-mt-1 2xl:-mt-24">
      <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
        Start Fast with <span className="text-primary">6000+</span> Templates
      </h3>
      <CategoryButtons
        onSelectCategory={(cat, i) => handleCategoryChange(cat, i)}
        selectedCategory={selectedCategory}
        allCategory={allCategory}
      />
      <div className="overflow-hidden">
        <div className="w-full">
          <VideoSlider
            videos={allCategory[selectedCategory?.index ?? 0]?.videos ?? []}
            direction="left"
            onVideoClick={handleVideoClick}
            selectedCategory={selectedCategory}
          />
        </div>
        {/*<div className="w-full">
          <VideoSlider
            videos={allCategory[selectedCategory?.index ?? 0]?.videos ?? []}
            direction="right"
            onVideoClick={handleVideoClick}
          />
        </div>*/}
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
