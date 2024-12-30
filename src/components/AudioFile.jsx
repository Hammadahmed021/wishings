import React, { useState } from "react";

const AudioFilesView = ({
  audioFiles,
  handleSelect,
  handleUpload,
  selectedFiles,
  catId,
  uploadedAudio,
}) => {
  const matchIDBetweenTwoArry = (data, ids) => {
    const idList = ids.map((item) => item.id);
    return data.filter((item) => idList.includes(item.id));
  };

  const categoryAudioFiles = matchIDBetweenTwoArry(audioFiles, catId)
    ?.map((res) => res?.music)
    .flat();

  // const categoryAudioFiles =
  //   audioFiles.filter((res) => res.id === catId)[0]?.music || [];

  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items for the current page
  const currentItems = categoryAudioFiles.slice(startIndex, endIndex);

  // Pagination navigation
  const handleNextPage = () => {
    if (currentPage < Math.ceil(categoryAudioFiles.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="mb-16">
      {/* Title */}
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
        Audio Files
      </h2>

      {/* Upload Input */}
      <div className="mb-6">
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={(event) => handleUpload(event)}
          className="border border-gray-300 p-2 rounded-lg w-auto text-gray-700"
        />
      </div>

      {/* Audio Files Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((file) => (
          <div
            key={file.id}
            className={`relative flex flex-col items-center p-6 rounded-xl shadow-lg bg-gradient-to-r from-gray-200/60 to-gray-300/40 backdrop-blur-lg border border-white/20 transition-all hover:scale-105 hover:shadow-2xl ${
              selectedFiles.some((selectedFile) => selectedFile.id === file.id)
                ? "ring-2 ring-blue-400"
                : ""
            }`}
          >
            {/* Checkbox */}
            <input
              id={`checkbox-${file.id}`}
              type="checkbox"
              checked={selectedFiles.some(
                (selectedFile) => selectedFile.id === file.id
              )}
              onChange={() => handleSelect(file)}
              className="hidden"
            />
            <label
              htmlFor={`checkbox-${file.id}`}
              className={`absolute top-4 right-4 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-all border-2 ${
                selectedFiles.some(
                  (selectedFile) => selectedFile.id === file.id
                )
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-white border-gray-300 text-gray-400"
              } hover:border-blue-400`}
            >
              {selectedFiles.some(
                (selectedFile) => selectedFile.id === file.id
              ) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 16.172l-3.586-3.586a1 1 0 011.414-1.414L9 13.344l7.172-7.172a1 1 0 011.414 1.414L9 16.172z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </label>

            {/* File Title */}
            <h3 className="text-lg font-semibold text-gray-800 truncate mb-4 text-center">
              {file.title ?? file?.name}
            </h3>

            {/* Audio Player */}
            <audio
              controls
              src={file?.music_path ?? file?.url}
              className="w-full mt-2"
              controlsList="nodownload"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-1 rounded-lg font-medium transition-all ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of{" "}
          {Math.ceil(categoryAudioFiles.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(categoryAudioFiles.length / itemsPerPage)
          }
          className={`px-4 py-1 rounded-lg font-medium transition-all ${
            currentPage === Math.ceil(categoryAudioFiles.length / itemsPerPage)
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Uploaded Audios Section */}
      {uploadedAudio?.length > 0 && (
        <>
          <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mt-12 mb-8">
            Uploaded Audios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {uploadedAudio.map((file) => (
              <div
                key={file.id}
                className={`relative flex flex-col items-center p-6 rounded-xl shadow-lg bg-gradient-to-r from-gray-200/60 to-gray-300/40 backdrop-blur-lg border border-white/20 transition-all hover:scale-105 hover:shadow-2xl ${
                  selectedFiles.some(
                    (selectedFile) => selectedFile.id === file.id
                  )
                    ? "ring-2 ring-blue-400"
                    : ""
                }`}
              >
                {/* Checkbox */}

                <input
                  id={`checkbox-${file.id}`}
                  type="checkbox"
                  checked={selectedFiles.some(
                    (selectedFile) => selectedFile.id === file.id
                  )}
                  onChange={() => handleSelect(file)}
                  className="hidden"
                />
                <label
                  htmlFor={`checkbox-${file.id}`}
                  className={`absolute top-4 right-4 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-all border-2 ${
                    selectedFiles.some(
                      (selectedFile) => selectedFile.id === file.id
                    )
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  } hover:border-blue-400`}
                >
                  {selectedFiles.some(
                    (selectedFile) => selectedFile.id === file.id
                  ) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 16.172l-3.586-3.586a1 1 0 011.414-1.414L9 13.344l7.172-7.172a1 1 0 011.414 1.414L9 16.172z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>

                {/* File Title */}
                <h3 className="text-lg font-semibold text-gray-800 truncate mb-4 text-center">
                  {file.title ?? file?.name}
                </h3>

                {/* Audio Player */}
                <audio
                  controls
                  src={file?.music_path ?? file?.url}
                  className="w-full mt-2"
                  controlsList="nodownload"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AudioFilesView;
