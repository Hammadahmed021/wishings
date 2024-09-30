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
    speed: 5000,
    slidesToShow: 3, // You can adjust the number of visible slides here
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    rtl: direction === "right", // Reverse direction for the second slider
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000,
          autoplaySpeed: 1200,

          cssEase: "ease",
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4000,
          autoplaySpeed: 1200,

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

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios'; // For making API requests
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useSwipeable } from 'react-swipeable';

// // API mock function to simulate category fetching
// const fetchCategories = async () => {
//   // Simulate a network call to fetch categories (replace this with API endpoint)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: 'Category 1' },
//         { id: 2, name: 'Category 2' },
//         { id: 3, name: 'Category 3' },
//         { id: 4, name: 'Category 4' },
//         { id: 5, name: 'Category 5' },
//         { id: 6, name: 'Category 6' },
//         { id: 7, name: 'Category 7' },
//         { id: 8, name: 'Category 8' },
//       ]);
//     }, 1000);
//   });
// };

// // Simulate template fetching based on category (replace this with  actual API call)
// const fetchTemplatesForCategory = async (category) => {
//   // Simulate fetching videos for a specific category
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         'https://www.w3schools.com/html/mov_bbb.mp4',
//         'https://www.w3schools.com/html/movie.mp4',
//         'https://www.w3schools.com/html/mov_bbb.mp4',
//       ]);
//     }, 1000);
//   });
// };

// // VideoSlider component to display videos in a slider
// const VideoSlider = ({ videos, direction }) => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     rtl: direction === 'right', // Reverse direction for the second slider
//   };

//   return (
//     <Slider {...settings}>
//       {videos.map((video, index) => (
//         <div key={index} className="p-2">
//           <video src={video} className="w-full h-full object-cover" autoPlay loop muted></video>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// // CategoryButtons component with swiping functionality
// const CategoryButtons = ({ categories, onSelectCategory, selectedCategory }) => {
//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe('left'),
//     onSwipedRight: () => handleSwipe('right'),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   const handleSwipe = (direction) => {
//     const currentIndex = categories.findIndex((category) => category.name === selectedCategory);
//     if (direction === 'left' && currentIndex < categories.length - 1) {
//       onSelectCategory(categories[currentIndex + 1].name);
//     } else if (direction === 'right' && currentIndex > 0) {
//       onSelectCategory(categories[currentIndex - 1].name);
//     }
//   };

//   return (
//     <div {...handlers} className="overflow-x-auto whitespace-nowrap flex lg:justify-center space-x-4 mb-6">
//       {categories.map((category) => (
//         <button
//           key={category.id}
//           className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
//             selectedCategory === category.name ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
//           }`}
//           onClick={() => onSelectCategory(category.name)}
//         >
//           {category.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// // Main TemplateSlider component
// const TemplateSlider = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [loadingVideos, setLoadingVideos] = useState(false);

//   // Fetch categories on component mount
//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const categoriesData = await fetchCategories();
//         setCategories(categoriesData);
//         setSelectedCategory(categoriesData[0].name); // Automatically select the first category
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     loadCategories();
//   }, []);

//   // Fetch videos whenever the selected category changes
//   useEffect(() => {
//     if (selectedCategory) {
//       const loadVideos = async () => {
//         setLoadingVideos(true);
//         try {
//           const videosData = await fetchTemplatesForCategory(selectedCategory);
//           setVideos(videosData);
//         } catch (error) {
//           console.error('Error fetching videos:', error);
//         } finally {
//           setLoadingVideos(false);
//         }
//       };

//       loadVideos();
//     }
//   }, [selectedCategory]);

//   if (loadingCategories) {
//     return <div>Loading categories...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
//         Start Fast with <span className="text-primary">6000+</span> Templates
//       </h3>

//       {/* Category Buttons with Swiping */}
//       <CategoryButtons
//         categories={categories}
//         onSelectCategory={setSelectedCategory}
//         selectedCategory={selectedCategory}
//       />

//       {/* Sliders */}
//       <div className="space-y-6">
//         {loadingVideos ? (
//           <div>Loading videos for {selectedCategory}...</div>
//         ) : (
//           <>
//             <div className="w-full">
//               <VideoSlider videos={videos} direction="left" />
//             </div>
//             <div className="w-full">
//               <VideoSlider videos={videos} direction="right" />
//             </div>
//           </>
//         )}
//       </div>
// <div className="mt-6 text-center">
// <Link to={`/category/${selectedCategory}`} className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
//   See All
// </Link>
// </div>
//     </div>
//   );
// };

// export default TemplateSlider;
