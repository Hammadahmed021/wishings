const VideoView = ({handleRemoveVideo,handleVideoUpload,MAX_VIDEOS,videos}) => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Upload Videos</h2>

        <div className="mb-4">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="border p-2"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">
          You can upload up to {MAX_VIDEOS} videos. Total size must be less than
          2GB.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="relative">
              <video
                src={video.id}
                controls
                className="w-full h-32 object-cover rounded"
              />
              <button
                onClick={() => handleRemoveVideo(video.id)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
              >
                ✕
              </button>
              <p className="text-xs text-center mt-1">{video.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  export default VideoView