// Handle selection of a single audio file
const AudioFilesView = ({ audioFiles, handleSelect, handleUpload, selectedFile }) => {
  //   const handleSelect = (file) => {
  //     setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
  //   };
  return (
    <div className="mb-16">
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">

        Audio Files</h2>

      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          onChange={handleUpload}
          className="border p-2"
        />
      </div>

      <ul className="space-y-4">
  {audioFiles.map((file) => (
    <li
      key={file.id}
      className={`flex items-center gap-4 p-4 border bg-gray-200 rounded-lg  transition-all ${
        selectedFile?.id === file.id
          ? " "
          : "border-gray-200 bg-white hover:shadow-sm"
      }`}
    >
      {/* Radio Button */}
      <input
        type="radio"
        name="audioSelect"
        checked={selectedFile?.id === file.id}
        onChange={() => handleSelect(file)}
        className="form-radio w-5 h-5 text-primary focus:ring-primary"
      />

      {/* File Title */}
      <span className="flex-1 font-medium text-text truncate font-poppins capitalize">
        {file.title ?? file?.name}
      </span>

      {/* Audio Player */}
      <audio
        controls
        src={file?.music_path ?? file?.url}
        className="bg-transparent w-1/2  focus:outline-none"
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

export default AudioFilesView