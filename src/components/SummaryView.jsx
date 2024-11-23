import { useDispatch } from "react-redux";
import { signupUser } from "../store/authSlice";
import { useState } from "react";

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
}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  const token = localStorage.getItem("wishToken");

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
    <div className="container mx-auto p-6">
      <h3 className="text-xl font-semibold mb-6">Summary of Your Selections</h3>

      {!token ? (
        <div className="mb-6">
          <h4 className="font-semibold mb-4">Sign Up</h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <h4 className="font-semibold mb-4">or want to login?</h4>
          <button
            onClick={ () => {
              navigate("/signin",{state:{navigate:true}});
            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
           login
          </button>
        </div>
      ) : (
        <p className="font-semibold mb-6">You are logged in</p>
      )}

      <div className="mb-6">
        <h4 className="font-semibold">Category Name:</h4>
        <p>{state?.categoryName}</p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Titles:</h4>
        <ul className="list-disc pl-6">
          {titles.length > 0
            ? titles.map((title, index) => <li key={index}>{title}</li>)
            : "No titles added"}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Instructions:</h4>
        <p>{instructions}</p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Proportion:</h4>
        <p>{proportion}</p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Tags:</h4>
        <ul className="list-disc pl-6">
          {tags.length > 0
            ? tags.map((tag, index) => <li key={index}>{tag}</li>)
            : "No tags added"}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Images:</h4>
        <ul className="list-disc pl-6">
          {images.map((image, index) => (
            <li key={index}>{image.name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Audios:</h4>
        <ul className="list-disc pl-6">
          <li>{selectedFile.name ?? selectedFile.title}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Videos:</h4>
        <ul className="list-disc pl-6">
          {videos.map((video, index) => (
            <li key={index}>{video.name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Time:</h4>
        <p>{selectedTime}</p>
        <p>Price: {calculatePrice} $</p>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold">Script:</h4>
        {pdfFile ? (
          <p>Uploaded PDF: {pdfFile.name}</p>
        ) : (
          <p>
            {scriptText
              ? `${scriptText.slice(0, 100)}...`
              : "No script provided"}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={async () => {
            if (!token) {
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Confirm and Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SummaryView;
