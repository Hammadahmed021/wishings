const VideoView = ({ handleRemoveVideo, handleVideoUpload, MAX_VIDEOS, videos }) => {
  return (
    <div className="mb-16">
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">

        Upload Videos</h2>

      <div className="mb-4">
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoUpload}
          className="border p-2"
        />
      </div>

      <p className="text-base text-muted mb-4">
        You can upload up to {MAX_VIDEOS} videos. Total size must be less than
        2GB.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {videos.map((video) => (
          <div key={video.id} className="relative">
            <video
              src={video.id}
              controls
              className="w-full h-32 object-cover rounded"
            />
            <button
              onClick={() => handleRemoveVideo(video.id)}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 hover:bg-red-700"
            >
              ✕
            </button>
            <p className="text-sm text-center mt-1">{video.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default VideoView