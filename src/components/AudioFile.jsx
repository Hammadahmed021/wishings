  // Handle selection of a single audio file
  const AudioFilesView = ({audioFiles,handleSelect,handleUpload,selectedFile}) => {
    //   const handleSelect = (file) => {
    //     setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
    //   };
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Audio Files</h2>

        <div className="mb-4">
          <input
            type="file"
            accept="audio/*"
            onChange={handleUpload}
            className="border p-2"
          />
        </div>

        <ul className="space-y-2">
          {audioFiles.map((file) => (
            <li
              key={file.id}
              className="flex items-center space-x-3 p-2 border rounded"
            >
              <input
                type="radio"
                name="audioSelect"
                checked={selectedFile?.id === file.id}
                onChange={() => handleSelect(file)}
                className="form-radio"
              />
              <span className="flex-1">{file.title ?? file?.name}</span>
              <audio
                controls
                src={file?.music_path ?? file?.url}
                className="flex-shrink-0 w-32"
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