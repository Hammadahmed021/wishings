import React from "react";

const VideoTagsInput = ({
  tags,
  currentTag,
  handleInputChange,
  addTag,
  removeTag,
}) => {
  return (
    <div className="flex flex-col justify-start items-center mb-16">
      <div className="p-6 bg-white rounded-lg border w-full">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
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
          className="flex items-center justify-start space-x-2 w-full md:w-[40%]"
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
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300"
          >
            Add
          </button>
        </form>
        <div className="mt-4">
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center border text-black px-3 py-0 hover:bg-gray-100  rounded-full shadow-sm"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 ttext-black cursor-pointer"
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
