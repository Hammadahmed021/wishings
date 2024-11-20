import React from "react";

const VideoTagsInput = ({
  tags,
  currentTag,
  handleInputChange,
  addTag,
  removeTag,
}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Add Tags for Your Video
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            if (currentTag.trim()) {
              // Ensure tag is not empty
              addTag(currentTag);
            }
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={currentTag}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter a tag and press Add"
            className="flex-grow px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add
          </button>
        </form>
        <div className="mt-4">
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full shadow-sm"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTagsInput;
