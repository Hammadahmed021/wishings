import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import audio1 from "../assets/Audio/audio1.mp3";
import audio2 from "../assets/Audio/audio2.mp3";
import audio3 from "../assets/Audio/audio3.mp3";
import { getAudioApi } from "../utils/Api";
//import

const TemplatePage = () => {
  const { id } = useParams();

  const { state } = useLocation();

  const [showModal, setShowModal] = useState(false);

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
  };

  // Audio funtions

  const getAudio = async () => {
    const { status, data } = await getAudioApi();
    if (status == 200) setAudioFiles(data?.music ?? []);
    console.log("kjsabjkbdkjbvskbdlkvbs", status, data);
  };

  useEffect(() => {
    getAudio();
  }, []);

  const [audioFiles, setAudioFiles] = useState([]);

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
          Category Name: {state?.categoryName}
        </label>
        {/*<select
          id="category"
          name="category"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>*/}
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
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Summary of Your Selections
            </h3>
            <label htmlFor="category" className="text-gray-700 font-medium">
              Category Name: {state?.categoryName}
            </label>
            {/* Images Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Images:</h4>
              <ul className="list-disc pl-5">
                {images.map((image, index) => (
                  <li key={index}>{image.name}</li>
                ))}
              </ul>
            </div>

            {/* Audios Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Audios:</h4>
              <ul className="list-disc pl-5">
                <li>{selectedFile.name ?? selectedFile.title}</li>

                {/*{selectedFile.map((audio, index) => (
                  <li key={index}>{audio.name}</li>
                ))}*/}
              </ul>
            </div>

            {/* Videos Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Videos:</h4>
              <ul className="list-disc pl-5">
                {videos.map((video, index) => (
                  <li key={index}>{video.name}</li>
                ))}
              </ul>
            </div>

            {/* Time Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Time: {selectedTime}</h4>
              <p>{calculatePrice()} $</p>
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

  // Time wheel function

  const timeOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 30); // Creates intervals of 30 seconds up to 600 seconds

  const [selectedTime, setSelectedTime] = useState(30); // Default selection is 60 seconds
  const basePrice = 49;
const additionalCostPerInterval = 30;

  // Calculate price based on the selected time
  const calculatePrice = () =>
    basePrice + (selectedTime / 30 - 1) * additionalCostPerInterval;

  const TimeWheelView = () => {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Time Selection Wheel</h2>
        <div style={{ display: "flex", overflowX: "scroll" }}>
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              style={{
                margin: "5px",
                padding: "10px 20px",
                backgroundColor: selectedTime === time ? "#4caf50" : "#f1f1f1",
                borderRadius: "50%",
                color: selectedTime === time ? "white" : "black",
              }}
            >
              {time} sec
            </button>
          ))}
        </div>
        <h3>Selected Time: {selectedTime} sec</h3>
        <h3>Price: ${calculatePrice()}</h3>
      </div>
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
      <TimeWheelView />
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
