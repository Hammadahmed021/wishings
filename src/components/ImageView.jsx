const ImagesView = ({handleImageUpload,MAX_IMAGES,images,handleRemoveImage}) => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Upload Images</h2>

        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="border p-2"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">
          You can upload up to {MAX_IMAGES} images. Total size must be less than
          2GB.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.id}
                alt={image.name}
                className="w-full h-32 object-cover rounded"
              />
              <button
                onClick={() => handleRemoveImage(image.id)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
              >
                ✕
              </button>
              <p className="text-xs text-center mt-1">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ImagesView