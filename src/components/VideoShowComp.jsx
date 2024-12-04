import React, { useEffect } from 'react';

const VideoDisplay = ({ videoSrc, videoType, setVideoType }) => {
  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;

    video.onloadedmetadata = () => {
      const aspectRatio = video.videoWidth / video.videoHeight;
      if (aspectRatio > 1.2) {
        setVideoType('Landscape');
      } else if (aspectRatio < 0.8) {
        setVideoType('Portrait');
      } else {
        setVideoType('Square');
      }
    };
  }, [videoSrc, setVideoType]);

  return (
    <div
      className={`flex justify-center items-center border rounded-lg overflow-hidden ${
        videoType === 'Landscape'
          ? 'w-96 h-64'
          : videoType === 'Portrait'
          ? 'w-48 h-96'
          : 'w-64 h-64'
      } bg-black`}
    >
      <video
        className={`rounded-lg ${
          videoType === 'Landscape'
            ? 'w-full h-auto'
            : videoType === 'Portrait'
            ? 'h-full w-auto'
            : 'w-full h-full'
        }`}
        controls
        src={videoSrc}
      />
    </div>
  );
};

export default VideoDisplay;
