import { useState } from "react";
import { useParams } from "react-router-dom";
import audio1 from "../assets/Audio/audio1.mp3";
import audio2 from "../assets/Audio/audio2.mp3";
import audio3 from "../assets/Audio/audio3.mp3";
//import

const TemplatePage = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
  };

  // Audio funtions

  const [audioFiles, setAudioFiles] = useState([
    { id: 1, name: "Audio 1", url: audio1 },
    { id: 2, name: "Audio 2", url: audio2 },
    { id: 3, name: "Audio 3", url: audio3 },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle audio file upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newAudio = {
        id: audioFiles.length + 1,
        name: file.name,
        url: URL.createObjectURL(file),
      };
      setAudioFiles([...audioFiles, newAudio]);
    }
  };

  // Handle selection of a single audio file
  const handleSelect = (file) => {
    setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
  };
  const AudioFilesView = () => {
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
              <span className="flex-1">{file.name}</span>
              <audio
                controls
                src={file.url}
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

  // Images function

  const [images, setImages] = useState([]);
  const MAX_IMAGES = 25;
  const MAX_SIZE = 2 * 1024 * 1024 * 1024; // 2GB in bytes

  // Handle image uploads
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    // Check if total files exceed limit
    if (images.length + files.length > MAX_IMAGES) {
      alert(`You can upload a maximum of ${MAX_IMAGES} images.`);
      return;
    }

    // Calculate total size of current and new images
    const currentSize = images.reduce((acc, img) => acc + img.size, 0);
    const newFilesSize = files.reduce((acc, file) => acc + file.size, 0);

    if (currentSize + newFilesSize > MAX_SIZE) {
      alert("The total size of all images must be less than 2GB.");
      return;
    }

    // Add images to the state
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file), // temporary URL for preview
      file,
      size: file.size,
      name: file.name,
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Remove image
  const handleRemoveImage = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  const ImagesView = () => {
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

  const categories = [
    "Birthday",
    "Convocation",
    "Christmas",
    "Wedding",
    "Engagement",
  ];

  function CategorySelect() {
    return (
      <div className="flex flex-col space-y-2 w-64">
        <label htmlFor="category" className="text-gray-700 font-medium">
          Choose a category:
        </label>
        <select
          id="category"
          name="category"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Video ALL Functions

  const [videos, setVideos] = useState([]);
  const MAX_VIDEOS = 25;
  const MAX_SIZE_VIDEO = 2 * 1024 * 1024 * 1024; // 2GB in bytes

  // Handle video uploads
  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);

    // Check if total files exceed limit
    if (videos.length + files.length > MAX_SIZE_VIDEO) {
      alert(`You can upload a maximum of ${MAX_SIZE_VIDEO} videos.`);
      return;
    }

    // Calculate total size of current and new videos
    const currentSize = videos.reduce((acc, video) => acc + video.size, 0);
    const newFilesSize = files.reduce((acc, file) => acc + file.size, 0);

    if (currentSize + newFilesSize > MAX_SIZE_VIDEO) {
      alert("The total size of all videos must be less than 2GB.");
      return;
    }

    // Add videos to the state
    const newVideos = files.map((file) => ({
      id: URL.createObjectURL(file), // temporary URL for preview
      file,
      size: file.size,
      name: file.name,
    }));

    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  };

  // Remove video
  const handleRemoveVideo = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const VideoView = () => {
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

  //  All scrips function

  const [pdfFile, setPdfFile] = useState(null); // Store uploaded PDF file
  const [scriptText, setScriptText] = useState(""); // Store user-written script
  const MAX_WORDS = 2500;

  // Handle PDF upload
  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setScriptText(""); // Clear the script text if a PDF is uploaded
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Handle script text change with word limit
  const handleScriptChange = (event) => {
    const text = event.target.value;
    const wordCount = text.trim().split(/\s+/).length;

    if (wordCount <= MAX_WORDS) {
      setScriptText(text);
      setPdfFile(null); // Clear PDF if the user starts typing a script
    } else {
      alert(`Word limit exceeded! You can only type up to ${MAX_WORDS} words.`);
    }
  };

  // Remove PDF file
  const removePdfFile = () => {
    setPdfFile(null);
  };

  // Clear the text input
  const clearScriptText = () => {
    setScriptText("");
  };

  // Calculate the word count of the script text
  const wordCount = scriptText.trim().split(/\s+/).filter(Boolean).length;

  const ScriptView = () => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">
          Upload or Write Your Script
        </h2>

        <div className="mb-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
            className="border p-2"
          />
          {pdfFile && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-sm">{pdfFile.name}</p>
              <button
                onClick={removePdfFile}
                className="bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 mb-2">
          Or, you can type your script (max {MAX_WORDS} words):
        </p>

        <textarea
          value={scriptText}
          onChange={handleScriptChange}
          placeholder="Type your script here..."
          rows="10"
          className="border w-full p-2"
          disabled={pdfFile !== null} // Disable textarea if PDF is uploaded
        ></textarea>

        <p className="text-sm text-gray-500 mt-2">
          Word Count: {wordCount}/{MAX_WORDS}
        </p>

        {scriptText && (
          <button
            onClick={clearScriptText}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Clear Script
          </button>
        )}
      </div>
    );
  };

  // Validation Function
  // Validation function
  const validateAllFields = () => {
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return false;
    }
    if (selectedFile.length === 0) {
      alert("Please upload at least one audio file.");
      return false;
    }
    if (videos.length === 0) {
      alert("Please upload at least one video file.");
      return false;
    }
    if (!pdfFile && scriptText.trim() === "") {
      alert("Please upload a script PDF or type a script.");
      return false;
    }

    // If all validations pass, show summary modal
    setShowModal(true);
    return true;
  };

  // Summary Function

  const SummaryView = () => {
    return (
      showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">
              Summary of Your Selections
            </h3>

            {/* Images Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Images:</h4>
              {images.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        className="w-24 h-24 object-cover mb-2 mx-auto"
                      />
                      <p className="text-sm">{image.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No images uploaded</p>
              )}
            </div>

            {/* Audios Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Audios:</h4>
              {audios.length > 0 ? (
                <ul className="list-disc pl-5">
                  {audios.map((audio, index) => (
                    <li key={index} className="text-sm">
                      {audio.name}{" "}
                      <audio controls className="ml-2">
                        <source
                          src={URL.createObjectURL(audio)}
                          type="audio/mp3"
                        />
                      </audio>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No audios uploaded</p>
              )}
            </div>

            {/* Videos Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Videos:</h4>
              {videos.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {videos.map((video, index) => (
                    <div key={index} className="text-center">
                      <video
                        controls
                        className="w-32 h-32 object-cover mb-2 mx-auto"
                      >
                        <source
                          src={URL.createObjectURL(video)}
                          type="video/mp4"
                        />
                      </video>
                      <p className="text-sm">{video.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No videos uploaded</p>
              )}
            </div>

            {/* Script Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Script:</h4>
              {pdfFile ? (
                <p>Uploaded PDF: {pdfFile.name}</p>
              ) : (
                <p>
                  {scriptText
                    ? scriptText.slice(0, 100) + "..."
                    : "No script provided"}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeModal();
                  alert("Proceeding to payment...");
                  // Add payment function call here
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm and Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  // Fetch or display data using the template id
  return (
    <div className="template-page">
      <h1 className="text-5xl">Template ID: {id}</h1>
      {/* Display template content */}
      <CategorySelect />
      <ScriptView />
      <AudioFilesView />
      <ImagesView />
      <VideoView />
      <SummaryView />
      {/* Validate and show summary button */}
      <button
        onClick={validateAllFields}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Show Summary and Proceed to Payment
      </button>
    </div>
  );
};

export default TemplatePage;
