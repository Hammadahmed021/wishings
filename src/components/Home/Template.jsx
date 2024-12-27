import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryWithVideos } from "../../utils/Api.js";
import { FaArrowLeft, FaArrowRight, FaPlayCircle } from "react-icons/fa";

const VideoSlider = ({ videos, onVideoClick, selectedCategory }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  const handleFullscreen = (video) => {
    setFullscreenVideo(video);
  };

  const handleExitFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <div>
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <video
            src={fullscreenVideo.video_path}
            className="w-full h-full object-contain"
            autoPlay
            controls
          ></video>
          <button
            onClick={handleExitFullscreen}
            className="absolute top-4 right-4 text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            Exit Fullscreen
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos?.slice(0, visibleCount).map((video) => (
          <div key={video.id} className="p-2">
            <div className="relative group">
              {/* Thumbnail */}
              <img
                src={video.thumbnail_path || video.video_path}
                alt={video.name}
                className="w-full h-52 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:cursor-pointer"
              />

              {/* Overlay */}
              <div className="gap-4 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span
                  onClick={() => handleFullscreen(video)}
                  className="cursor-pointer text-white bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end  rounded-full hover:shadow-lg"
                >
                  <FaPlayCircle size={40} />
                </span>
                {/* View Template Button */}
                <button
                  onClick={() =>
                    onVideoClick({ ...video, categoryName: selectedCategory?.name })
                  }
                  className=" px-4 py-2 bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end text-white rounded-full"
                >
                  Use Template
                </button>
              </div>
            </div>


          </div>

        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className={`px-4 py-2 bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end text-white rounded-full ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-primary-dark"
            }`}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

const CategoryButtons = ({ onSelectCategory, selectedCategory, allCategory }) => {
  const scrollContainerRef = useRef(null);

  // Scroll the container to the left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  // Scroll the container to the right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center mb-6">
      {/* Left Scroll Button */}
      <button
        onClick={handleScrollLeft}
        className="duration-200 transition-all absolute top-0 left-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-300 focus:outline-none"
      >
        <FaArrowLeft size={18} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap flex space-x-4 w-[92%] mx-auto scrollbar-hidden pb-6 border-b"
      >
        {allCategory.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-1 text-base font-normal ${selectedCategory?.id === category?.id
                ? "text-primary border border-primary rounded-lg"
                : "text-black"
              }`}
            onClick={() => onSelectCategory(category, index)}
          >
            {category?.name}
          </button>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={handleScrollRight}
        className="duration-200 transition-all absolute top-0 right-0 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-300 focus:outline-none"
      >
        <FaArrowRight size={18} />

      </button>
    </div>
  );
};

const TemplateSlider = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const getCategory = async () => {
    const { status, data } = await getCategoryWithVideos()
    console.log("lsdbvklsbdvklsbdlvkbsdklvblsdbvksdblvsdblkv", data)
    if (status == 200) {
      setSelectedCategory(data?.categories[0] ?? []);
      setAllCategory(data?.categories ?? []);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCategoryChange = (category, index) => {
    setSelectedCategory({ ...category, index });
  };

  const handleVideoClick = (obj) => {
    navigate(`/template/${obj?.id}`, { state: obj });
  };

  return (
    <div className="container mx-auto px-4 -mt-8 md:mt-20 lg:-mt-1 2xl:-mt-24">
      <h3 className="text-h3 text-center pt-3 font-roboto pb-8 xl:pb-12">
        Start Fast with <span className="text-primary">1000+</span> Templates
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
            onVideoClick={handleVideoClick}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateSlider;
