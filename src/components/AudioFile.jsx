// Handle selection of a single audio file
const AudioFilesView = ({
  audioFiles,
  handleSelect,
  handleUpload,
  selectedFiles,
  catId,
  uploadedAudio,
}) => {
  console.log(
    "lsvklsdklvsdklvbksdlbvkldsvbkldsbvlksdbvklsdbvds",
    audioFiles.filter((res) => res.id == catId)?.music?.map((res) => res),
    catId
  );

  //   const handleSelect = (file) => {
  //     setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
  //   };
  return (
    <div className="mb-16">
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
        Audio Files
      </h2>

      <h2 className="text-xl font-bold mb-4">Upload audios</h2>
      <div className="space-y-4">
        {uploadedAudio?.map((file) => (
          <li
            key={file.id}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4 p-4 border bg-gray-200 rounded-lg transition-all ${
              selectedFiles.some((selectedFile) => selectedFile.id === file.id)
                ? "border-primary bg-primary"
                : "border-gray-200 bg-white hover:shadow-sm"
            }`}
          >
            <div className="flex gap-x-4">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selectedFiles.some(
                  (selectedFile) => selectedFile.id === file.id
                )}
                onChange={() => handleSelect(file)}
                className="form-checkbox w-5 h-5 text-primary focus:ring-primary"
              />

              {/* File Title */}
              <span className="flex-1 font-medium text-text truncate font-poppins capitalize">
                {file.title ?? file?.name}
              </span>
            </div>
            {/* Audio Player */}
            <audio
              controls
              src={file?.music_path ?? file?.url}
              className="w-full sm:w-1/2 bg-transparent focus:outline-none"
              controlsList="nodownload"
            >
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}

        <div className="mb-4">
          <input
            type="file"
            accept="audio/*"
            multiple
            onChange={(event) => handleUpload(event)}
            className="border p-2"
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Pre-defined audios</h2>
        <ul className="space-y-4">
          {audioFiles
            .filter((res) => res.id == catId)[0]
            ?.music?.map((file) => (
              <li
                key={file.id}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4 p-4 border bg-gray-200 rounded-lg transition-all ${
                  selectedFiles.some(
                    (selectedFile) => selectedFile.id === file.id
                  )
                    ? "border-primary bg-primary"
                    : "border-gray-200 bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex gap-x-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedFiles.some(
                      (selectedFile) => selectedFile.id === file.id
                    )}
                    onChange={() => handleSelect(file)}
                    className="form-checkbox w-5 h-5 text-primary focus:ring-primary"
                  />

                  {/* File Title */}
                  <span className="flex-1 font-medium text-text truncate font-poppins capitalize">
                    {file.title ?? file?.name}
                  </span>
                </div>
                {/* Audio Player */}
                <audio
                  controls
                  src={file?.music_path ?? file?.url}
                  className="w-full sm:w-1/2 bg-transparent focus:outline-none"
                  controlsList="nodownload"
                >
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AudioFilesView;
