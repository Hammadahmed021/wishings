import { useDispatch } from "react-redux";
import { anonymousUser, logout, signupUser } from "../store/authSlice";
import { useEffect, useState } from "react";
import { Logout } from "../utils/Api";

const SummaryView = ({
  state,
  images,
  selectedFile,
  videos,
  selectedTime,
  pdfFile,
  scriptText,
  navigate,
  calculatePrice,
  categoryId,
  instructions,
  proportion,
  titles,
  tags,
  allData
}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [token, setToken] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem("wishToken");
    setToken(token)
  }, [])

  const dispatch = useDispatch();

  const handleSignup = async (userData) => {
    try {
      const response = await dispatch(signupUser(userData)).unwrap();
      return response;
    } catch (error) {
      if (error === "auth/email-already-in-use") {
        alert("User already exists with this email.");
      }
    }
  };

  const handleLoginSubmit = async () => {
    if (name != null && email != null && password != null) {
      const response = await handleSignup({ name, email, password });
      if (response) {
        navigate("/checkout", {
          state: {
            price: calculatePrice,
            selectedTime,
            images,
            videos,
            audio: selectedFile,
            scripts: pdfFile ?? scriptText,
            categoryId,
            videoId: state?.id,
            instructions,
            tags,
            titles,
            proportion,
          },
        });
      }
    } else {
      alert("Please fill in all fields to proceed.");
    }
  };

  return (
    <div className="container mx-auto space-y-8 bg-white  my-10 rounded-lg p-4">
      {/* Page Heading */}
      <h1 className="text-5xl font-poppins mb-8">
        Selection Summary
      </h1>

      {/* Sign Up or Login Section */}
      {!token ? (
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black">Sign Up</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Already have an account?</h3>
            <div className="flex gap-4 justify-start items-center">
              <button
                onClick={() => {
                  localStorage.setItem(
                    "redirectState",
                    JSON.stringify({
                      fromReservation: true,
                      location: { state: allData, pathname: "/summary" },
                    })
                  );
                  navigate("/signin");
                }}
                className="px-6 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Login
              </button>
              <h3 className="text-2xl font-medium font-poppins text-center">or</h3>
              <button
                onClick={async () => {
                  const loginResponse = await dispatch(anonymousUser()).unwrap();
                  setToken(loginResponse?.token);
                  setIsGuest(true)
                  setTimeout(async() => {
                    await Logout(); // Call Firebase signOut function
                    dispatch(logout()); // Dispatch your logout action
                  }, 50000);
                }}
                className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Continue as a Guest
              </button>
            </div>

          </div>
        </div>
      ) : (
        <p className="text-lg font-medium text-gray-600">You are logged in {isGuest && "as a guest after 5 minute you will be logout "}</p>
      )}

      {/* Summary Details */}
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h4 className="text-2xl font-medium font-poppins">Category Name:</h4>
          <p className="text-gray-700">{state?.categoryName}</p>
        </div>

        <div className="border-b pb-4">
          <h4 className="text-2xl font-medium font-poppins">Titles:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            {titles.length > 0
              ? titles.map((title, index) => <li key={index}>{title}</li>)
              : "No titles added"}
          </ul>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Instructions:</h4>
          <p className="text-gray-700">{instructions}</p>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Proportion:</h4>
          <p className="text-gray-700">{proportion}</p>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Tags:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            {tags.length > 0
              ? tags.map((tag, index) => <li key={index}>{tag}</li>)
              : "No tags added"}
          </ul>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Images:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Audios:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>{selectedFile.name ?? selectedFile.title}</li>
          </ul>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Videos:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            {videos.map((video, index) => (
              <li key={index}>{video.name}</li>
            ))}
          </ul>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Time:</h4>
          <p className="text-gray-700">{selectedTime}</p>
          <p className="text-gray-700">Price: {calculatePrice} $</p>
        </div>

        <div className="border-b pb-4">

          <h4 className="text-2xl font-medium font-poppins">Script:</h4>
          {pdfFile ? (
            <p className="text-gray-700">Uploaded PDF: {pdfFile.name}</p>
          ) : (
            <p className="text-gray-700">
              {scriptText ? `${scriptText.slice(0, 100)}...` : "No script provided"}
            </p>
          )}
        </div>
      </div>

      {/* Confirm Button */}
      <div className="flex justify-start">
        <button
          onClick={async () => {
            if (!token) {
              // console.log("ljksdbvkljbsksdblksdblkvsblkbsdklv",token)
              handleLoginSubmit();
            } else {
              navigate("/checkout", {
                state: {
                  price: calculatePrice,
                  selectedTime,
                  images,
                  videos,
                  audio: selectedFile,
                  scripts: pdfFile ?? scriptText,
                  categoryId,
                  videoId: state?.id,
                  instructions,
                  tags,
                  titles,
                  proportion,
                },
              });
            }
          }}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary text-lg"
                >
          Proceed to Payment
        </button>
      </div>
    </div>

  );
};

export default SummaryView;
