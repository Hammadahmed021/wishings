import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import react-swipeable to handle swipe gestures
import { useSwipeable } from 'react-swipeable';


const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8'];

const templates = {
  'Category 1': ['https://www.w3schools.com/html/mov_bbb.mp4', 'https://www.w3schools.com/html/mov_bbb.mp4','https://www.w3schools.com/html/mov_bbb.mp4','https://www.w3schools.com/html/mov_bbb.mp4','https://www.w3schools.com/html/mov_bbb.mp4','https://www.w3schools.com/html/mov_bbb.mp4',],
  'Category 2': ['https://www.w3schools.com/html/movie.mp4','https://www.w3schools.com/html/movie.mp4','https://www.w3schools.com/html/movie.mp4','https://www.w3schools.com/html/movie.mp4','https://www.w3schools.com/html/movie.mp4','https://www.w3schools.com/html/movie.mp4',],
  // Add videos for other categories...
};

const VideoSlider = ({ videos, direction }) => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3, // You can adjust the number of visible slides here
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: direction === 'right', // Reverse direction for the second slider
    };
  
    return (
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="p-2">
            <video src={video} className="w-full h-full object-cover" autoPlay loop muted></video>
          </div>
        ))}
      </Slider>
    );
  };
  
  const CategoryButtons = ({ onSelectCategory, selectedCategory }) => {
    // Swiping handler for mobile devices
    const handlers = useSwipeable({
      onSwipedLeft: () => handleSwipe('left'),
      onSwipedRight: () => handleSwipe('right'),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    });
  
    const handleSwipe = (direction) => {
      const currentIndex = categories.indexOf(selectedCategory);
      if (direction === 'left' && currentIndex < categories.length - 1) {
        onSelectCategory(categories[currentIndex + 1]);
      } else if (direction === 'right' && currentIndex > 0) {
        onSelectCategory(categories[currentIndex - 1]);
      }
    };
  
    return (
      <div
        {...handlers}
        className="overflow-x-auto whitespace-nowrap flex lg:justify-center space-x-4 mb-6"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded text-sm sm:text-base ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
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
    const [selectedCategory, setSelectedCategory] = useState('Category 1');
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <div className="container mx-auto px-4">
        {/* Category Buttons with Swiping */}
        <CategoryButtons
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
        />
  
        {/* Sliders */}
        <div className="space-y-6">
          <div className="w-full">
            <VideoSlider videos={templates[selectedCategory]} direction="left" />
          </div>
          <div className="w-full">
            <VideoSlider videos={templates[selectedCategory]} direction="right" />
          </div>
        </div>
      </div>
    );
  };
  
export default TemplateSlider;









// export const Template = () => {

//     const [videos] = useState([
//         { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//         { url: "https://www.w3schools.com/html/movie.mp4" },
//         { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//         { url: "https://www.w3schools.com/html/movie.mp4" },
//         { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//         { url: "https://www.w3schools.com/html/movie.mp4" },
//         { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//         { url: "https://www.w3schools.com/html/movie.mp4" },
//         { url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//       ]);

//   return (
//     <section className="-mt-6 md:mt-14 xl:-mt-6 2xl:-mt-28">
//       <div className="xl:container xl:mx-auto">
//         <h3 className="text-h3 text-center font-roboto">
//           Start Fast with <span className="text-primary">6000+</span> Templates
//         </h3>
//         <div className="grid grid-cols-3 gap-4 p-4">
//           {videos.map((video, index) => (
//             <div key={index} className="relative w-full h-64">
//               <video
//                 className="w-full h-full object-cover"
//                 src={video.url}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
