import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import audio1 from "../assets/Audio/audio1.mp3";
import audio2 from "../assets/Audio/audio2.mp3";
import audio3 from "../assets/Audio/audio3.mp3";
import { getAudioApi, getCategoryWithVideos } from "../utils/Api";
import AudioFilesView from "../components/AudioFile";
import ImagesView from "../components/ImageView";
import VideoView from "../components/VideoView";
import SummaryView from "../components/SummaryView";
import ScriptView from "../components/ScriptView";
import VideoTitleInput from "../components/TitleInput";
import VideoTagsInput from "../components/TagsFroVideo";
import VideoInstructionsInput from "../components/VideoInstructionInput";
import VideoProportionSelector from "../components/VideoProportionSelect";
import VideoDisplay from "../components/VideoShowComp";
import OptionPicker from "../components/OptionPicker";

//import

const TemplatePage = () => {
  const { id } = useParams();

  const { state } = useLocation();

  const getCategory = async () => {
    const { status, data } = await getCategoryWithVideos();
    console.log("lsdbvklsbdvklsbdlvkbsdklvblsdbvksdblvsdblkv", data);
    if (status == 200) {
      setSelectedOption(data?.categories);
      const filterOnlyMisuc = data?.categories?.map(({ id, music }) => ({
        [id]: {
          music,
        },
      }));
      console.log("jjsbdvklsbdvklbsdklvsd", filterOnlyMisuc);
      setAudioFiles(filterOnlyMisuc);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [selectedOption, setSelectedOption] = useState([]);
  const [onSelect, setOnSelect] = useState({
    id: state?.category_id,
    name: state?.categoryName,
  });

  const handleOptionClick = (option) => {
    setOnSelect(option);
  };

  console.log("statestatestatestatestatestate", state);

  const navigate = useNavigate();

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
  const [uploadedAudio, setUploadedAudio] = useState([]);

  const [selectedFile, setSelectedFiles] = useState([]);

  // Handle audio file upload
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newAudioFiles = files.map((file, index) => ({
      id: Date.now() + index, // Use unique id for each file
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    newAudioFiles.map((res) => handleSelect(res));
    setUploadedAudio((prevFiles) => [...prevFiles, ...newAudioFiles]);
  };

  // Handle selection of multiple audio files
  const handleSelect = (file) => {
    setSelectedFiles((prevSelected) => {
      const isSelected = prevSelected.some(
        (selectedFile) => selectedFile.id === file.id
      );
      if (isSelected) {
        return prevSelected.filter(
          (selectedFile) => selectedFile.id !== file.id
        );
      }
      return [...prevSelected, file];
    });
  };

  //// Handle audio file upload
  //const handleUpload = (event) => {
  //  const file = event.target.files[0];
  //  if (file) {
  //    const newAudio = {
  //      id: audioFiles.length + 1,
  //      name: file.name,
  //      url: URL.createObjectURL(file),
  //    };
  //    setAudioFiles([...audioFiles, newAudio]);
  //  }
  //};

  //// Handle selection of a single audio file
  //const handleSelect = (file) => {
  //  setSelectedFile(file.id === selectedFile?.id ? null : file); // Toggle selection
  //};

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

  // const ImagesView = () => {
  //   return (
  //     <div className="p-4">
  //       <h2 className="text-lg font-semibold mb-4">Upload Images</h2>

  //       <div className="mb-4">
  //         <input
  //           type="file"
  //           accept="image/*"
  //           multiple
  //           onChange={handleImageUpload}
  //           className="border p-2"
  //         />
  //       </div>

  //       <p className="text-sm text-gray-500 mb-4">
  //         You can upload up to {MAX_IMAGES} images. Total size must be less than
  //         2GB.
  //       </p>

  //       <div className="grid grid-cols-3 gap-4">
  //         {images.map((image) => (
  //           <div key={image.id} className="relative">
  //             <img
  //               src={image.id}
  //               alt={image.name}
  //               className="w-full h-32 object-cover rounded"
  //             />
  //             <button
  //               onClick={() => handleRemoveImage(image.id)}
  //               className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
  //             >
  //               ✕
  //             </button>
  //             <p className="text-xs text-center mt-1">{image.name}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const categories = [
    "Birthday",
    "Convocation",
    "Christmas",
    "Wedding",
    "Engagement",
  ];

  function CategorySelect({ catName }) {
    return (
      <div className="flex flex-col ">
        <h2
          htmlFor="category"
          className="text-gray-800 font-medium font-poppins text-3xl"
        >
          Category Name: {onSelect?.name}
        </h2>
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
      name: file?.name,
    }));

    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  };

  // Remove video
  const handleRemoveVideo = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  //
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

  // hadle title

  const [titles, setTitles] = useState([]); // Array to store multiple titles
  const [currentTitle, setCurrentTitle] = useState("");

  // Handle input change for a specific title
  const handleTitleChange = (e) => {
    setCurrentTitle(e.target.value);
    // const newTitles = [...titles];
    // newTitles[index] = value;
    // setTitles(newTitles);
  };

  // Add a new title
  const addTitle = () => {
    //e.preventDefault();
    if (currentTitle.trim() && !titles.includes(currentTitle)) {
      setTitles([...titles, currentTitle.trim()]);
    }
    setCurrentTitle("");
    // setTitles([...titles, ""]);
  };

  // Remove a title
  const removeTitle = (titleToRemove) => {
    setTitles(titles.filter((title) => title !== titleToRemove));
    // const newTitles = titles.filter((_, i) => i !== index);
    // setTitles(newTitles);
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
    navigate("/summary", {
      state: {
        categoryId: state.category_id,
        calculatePrice: priceState,
        images: images,
        pdfFile: pdfFile,
        scriptText,
        selectedFile,
        selectedTime,
        state,
        videos,
        instructions,
        proportion,
        titles,
        tags,
      },
    });
    // If all validations pass, show summary modal
    setShowModal(true);
    return true;
  };

  // Summary Function

  // Time wheel function

  const timeOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 30); // 30s to 600s intervals
  const [selectedTime, setSelectedTime] = useState(30); // Default time
  const [priceState, setPriceState] = useState(49); // Default price
  const basePrice = 49;
  const additionalCostPerInterval = 30;

  // Calculate price based on the selected time
  const calculatePrice = (time) => {
    const timeDifference = time / 30 - 1;
    const newPrice = basePrice + timeDifference * additionalCostPerInterval;
    setPriceState(newPrice);
  };

  const TimeWheelView = () => {
    return (
      <div className="text-start mb-16">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">
          Time Selection Wheel
        </h2>

        {/* Time Wheel */}
        <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => {
                setSelectedTime(time);
                calculatePrice(time);
              }}
              className={`font-thin px-3 py-2 text-sm flex items-center justify-center rounded-lg border shadow-md transition-all duration-200 ${
                selectedTime === time
                  ? "bg-secondary text-white border-secondary"
                  : "bg-gray-100 text-black border-gray-300 hover:bg-primary hover:text-white hover:shadow-lg"
              }`}
            >
              <span className="text-base sm:text-sm font-medium">
                {time} sec
              </span>
            </button>
          ))}
        </div>

        {/* Selected Time and Price */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
          <h3 className="text-xl sm:text-lg font-normal text-black">
            Selected Time:{" "}
            <span className="text-primary font-semibold">
              {selectedTime} sec
            </span>
          </h3>
          <h3 className="text-xl sm:text-lg font-normal text-black">
            Price:{" "}
            <span className="text-primary font-semibold">
              ${priceState.toFixed(2)}
            </span>
          </h3>
        </div>
      </div>
    );
  };

  // add tags for my video

  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleTagsInputChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const addTag = (e) => {
    //e.preventDefault();
    if (currentTag.trim() && !tags.includes(currentTag)) {
      setTags([...tags, currentTag.trim()]);
    }
    setCurrentTag("");
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // add instruction for my video

  const [instructions, setInstructions] = useState("");

  const handleInstructionInputChange = (e) => {
    setInstructions(e.target.value);
  };

  // proportions selection

  const [proportion, setProportion] = useState("Portrait");

  const handleSelection = (selectedProportion) => {
    setProportion(selectedProportion);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch or display data using the template id
  return (
    <div className="container mx-auto py-16 p-4">
      {/* <h1 className="text-5xl font-poppins mb-8">
        Template ID: {id}</h1> */}
      {/* Display template content */}
      <CategorySelect catName={onSelect} />

      <ScriptView
        MAX_WORDS={MAX_WORDS}
        clearScriptText={clearScriptText}
        handlePdfUpload={(e) => handlePdfUpload(e)}
        handleScriptChange={(e) => handleScriptChange(e)}
        pdfFile={pdfFile}
        removePdfFile={removePdfFile}
        scriptText={scriptText}
        wordCount={wordCount}
      />
      <VideoTagsInput
        addTag={(tag) => addTag(tag)}
        currentTag={currentTag}
        handleInputChange={(input) => handleTagsInputChange(input)}
        removeTag={(e) => removeTag(e)}
        tags={tags}
      />
      <VideoInstructionsInput
        instructions={instructions}
        handleInputChange={(e) => handleInstructionInputChange(e)}
      />
      <VideoTitleInput
        titles={titles}
        handleTitleChange={(e) => handleTitleChange(e)}
        addTitle={(e) => addTitle(e)}
        removeTitle={(e) => removeTitle(e)}
        currentTitle={currentTitle}
      />
      <VideoProportionSelector
        proportion={proportion}
        handleSelection={(e) => handleSelection(e)}
        catVideo={state}
      />

      <OptionPicker
        options={selectedOption}
        onSelect={handleOptionClick}
        selectedVal={onSelect}
      />

      <AudioFilesView
        audioFiles={audioFiles}
        handleSelect={(e) => handleSelect(e)}
        handleUpload={(e) => handleUpload(e)}
        selectedFiles={selectedFile}
        uploadedAudio={uploadedAudio}
        catId={onSelect?.id}
      />
      <ImagesView
        MAX_IMAGES={MAX_IMAGES}
        handleImageUpload={(e) => handleImageUpload(e)}
        handleRemoveImage={(e) => handleRemoveImage(e)}
        images={images}
      />
      <VideoView
        MAX_VIDEOS={MAX_VIDEOS}
        handleRemoveVideo={(e) => handleRemoveVideo(e)}
        handleVideoUpload={(e) => handleVideoUpload(e)}
        videos={videos}
      />
      {/*<SummaryView
        categoryId={state.category_id}
        calculatePrice={calculatePrice}
        closeModal={closeModal}
        images={imagess}
        navigate={navigate}
        pdfFile={pdfFile}
        scriptText={scriptText}
        selectedFile={selectedFile}
        selectedTime={selectedTime}
        showModal={showModal}
        state={state}
        videos={videos}
        instructions={instructions}
        proportion={proportion}
        title={title}
        tags={tags}
      />*/}
      <TimeWheelView />
      {/* Validate and show summary button */}
      <button
        onClick={validateAllFields}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary text-lg"
      >
        View summary
      </button>
    </div>
  );
};

export default TemplatePage;
