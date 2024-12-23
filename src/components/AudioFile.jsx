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
    audioFiles[catId]?.music
  );

  //   const handleSelect = (file) => {
  //     setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
  //   };
  return (
    <div className="mb-16">
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
        Audio Files
      </h2>

      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={(event) => handleUpload(event)}
          className="border p-2"
        />
      </div>

      <ul className="space-y-4">
        {audioFiles[catId]?.music?.map((file) => (
          <li
            key={file.id}
            className={`flex items-center gap-4 p-4 border bg-gray-200 rounded-lg transition-all ${
              selectedFiles.some((selectedFile) => selectedFile.id === file.id)
                ? "border-primary bg-blue-100"
                : "border-gray-200 bg-white hover:shadow-sm"
            }`}
          >
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

            {/* Audio Player */}
            <audio
              controls
              src={file?.music_path ?? file?.url}
              className="bg-transparent w-1/2 focus:outline-none"
              controlsList="nodownload"
            >
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
        {uploadedAudio?.length > 0 && (
          <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8 mt-8">
            Uploaded Audios
          </h2>
        )}
        {uploadedAudio?.map((file) => (
          <li
            key={file.id}
            className={`flex items-center gap-4 p-4 border bg-gray-200 rounded-lg transition-all ${
              selectedFiles.some((selectedFile) => selectedFile.id === file.id)
                ? "border-primary bg-blue-100"
                : "border-gray-200 bg-white hover:shadow-sm"
            }`}
          >
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

            {/* Audio Player */}
            <audio
              controls
              src={file?.music_path ?? file?.url}
              className="bg-transparent w-1/2 focus:outline-none"
              controlsList="nodownload"
            >
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioFilesView;
