import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryWithVideos } from "../../utils/Api.js";
import { FaPlayCircle } from "react-icons/fa";

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
          <div  className="relative group">
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
              <FaPlayCircle size={40}/>
            </span>
             {/* View Template Button */}
          <button
            onClick={() =>
              onVideoClick({ ...video, categoryName: selectedCategory?.name })
            }
            className=" px-6 py-2 bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end text-white rounded-full"
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
          className={`px-8 py-2 bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end text-white rounded-full ${
            isLoading
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
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap flex mb-6 pb-3 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-primary">
      {allCategory.map((category, index) => (
        <button
          key={index}
          className={`py-2 px-3 xl:px-5 text-small ${
            selectedCategory?.id === category?.id
              ? "text-primary font-medium border border-primary rounded-full"
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const getCategory =async () => {
    const { status, data } = await getCategoryWithVideos()
    console.log("lsdbvklsbdvklsbdlvkbsdklvblsdbvksdblvsdblkv",data)
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
    <section className="xl:container xl:mx-auto px-3 md:mt-16">
      <h3 className="text-h3 text-center font-roboto pb-8 xl:pb-12">
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
    </section>
  );
};

export default TemplateSlider;
