import { useDispatch } from "react-redux";
import { signupUser } from "../store/authSlice";
import { Verify } from "../utils/Api";
import { useState } from "react";

const SummaryView = ({
  showModal,
  state,
  images,
  selectedFile,
  videos,
  selectedTime,
  pdfFile,
  scriptText,
  closeModal,
  navigate,
  calculatePrice,
  categoryId,
  instructions,
  proportion,
  title,
  tags,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGuest, setIsGuest] = useState(false);

  const token = localStorage.getItem("wishToken");

console.log("tokentokentokentokentokentokentokentoken",token)

  const handleGuestSignup = () => {
    // Handle guest signup logic here, e.g., navigate as guest or set some flag
    setIsGuest(true);
    closeModal();
    navigate("/checkout", {
      state: {
        price: calculatePrice(),
        selectedTime,
        images,
        videos,
        audio: selectedFile,
        scripts: pdfFile ?? scriptText,
        categoryId,
        videoId: state?.id,
        isGuest: true, // Add guest flag to checkout
        instructions,
        tags,
        title,
        proportion,
      },
    });
  };
  const dispatch = useDispatch();

const handleSignup = async (userData) => {
  console.log(userData, "signup form");
  try {
    const response = await dispatch(signupUser(userData)).unwrap();
    console.log("Signup response:", response);
    return response
    // Navigate to home or another page
    // navigate("/");
  } catch (error) {
    console.error("API Signup failed:", error);
    // Check the specific error code and display the appropriate error message
    if ((error = "auth/email-already-in-use")) {
      alert("User already exists with this email.");
    }
  } finally {
  }
};

  const handleLoginSubmit =async () => {
    if (name && email && password) {
      closeModal();

      // Handle actual login or sign-up logic here
       const response=  await handleSignup({ name, email, password })
      console.log("Signup response:", response);
      console.log("User signed up/logged in:", { name, email, password });
      if(response)
      navigate("/checkout", {
        state: {
          price: calculatePrice(),
          selectedTime,
          images,
          videos,
          audio: selectedFile,
          scripts: pdfFile ?? scriptText,
          categoryId,
          videoId: state?.id,
          instructions,
          tags,
          title,
          proportion,
        },
      });
    } else {
      alert("Please fill in all fields to proceed.");
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">
            Summary of Your Selections
          </h3>

          {/* Check if user is logged in */}
          {!token ? (
            <div className="mb-4">
              <h4 className="font-semibold">Sign Up / Login</h4>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                {/*<button
                  onClick={handleLoginSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Sign Up / Log In
                </button>*/}
              </div>
            </div>
          ) : (
            <div>
              <p className="font-semibold">You are logged in</p>
            </div>
          )}

          {/* If logged in or as a guest, display the summary */}
          <div>
            <label htmlFor="category" className="text-gray-700 font-medium">
              Category Name: {state?.categoryName}
            </label>

            {/* Title Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Title:</h4>
              <p>{title}</p>
            </div>

            {/* Instructions Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Instructions:</h4>
              <p>{instructions}</p>
            </div>

            {/* Proportion Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Proportion:</h4>
              <p>{proportion}</p>
            </div>

            {/* Tags Summary */}
            <div className="mb-4">
              <h4 className="font-semibold">Tags:</h4>
              <ul className="list-disc pl-5">
                {tags.length > 0 ? (
                  tags.map((tag, index) => <li key={index}>{tag}</li>)
                ) : (
                  <p>No tags added</p>
                )}
              </ul>
            </div>

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
              onClick={async () => {
                if (!token) handleLoginSubmit();
               else
                closeModal();
                navigate("/checkout", {
                  state: {
                    price: calculatePrice(),
                    selectedTime,
                    images,
                    videos,
                    audio: selectedFile,
                    scripts: pdfFile ?? scriptText,
                    categoryId,
                    videoId: state?.id,
                    isGuest, // Pass guest flag
                    instructions,
                    tags,
                    title,
                    proportion
                  },
                });
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

export default SummaryView;
