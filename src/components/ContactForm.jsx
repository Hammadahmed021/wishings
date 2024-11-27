import React, { useState } from "react";

// Define constants for validation
const MAX_TOTAL_SIZE = 2 * 1024 * 1024 * 1024; // 2 GB in bytes

const ContactForm = () => {
  // States for managing form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const totalSize = [...files, ...selectedFiles].reduce(
      (acc, file) => acc + file.size,
      0
    );

    if (totalSize > MAX_TOTAL_SIZE) {
      setError("Total size of all files exceeds the 2 GB limit.");
    } else {
      setError("");
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  // Remove a file from the selected list
  const handleRemoveFile = (fileIndex) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields (only the text fields are required, files are optional)
    if (!name || !phone || !email || !service || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    // Prepare FormData for submission (only if files are selected)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("service", service);
    formData.append("message", message);

    // Append files to FormData if any are selected
    files.forEach((file, index) => {
      formData.append(`file_${index}`, file);
    });
    // Log all entries in the FormData object
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Mocking the API call
    setTimeout(() => {
      setSuccess("Form submitted successfully!");
      setError(""); // Clear any previous error
      setFiles([]); // Clear the file list after submission
    }, 2000);
  };

  // rounded-xl shadow-lg
  return (
    <div className="max-w-full m-auto  w-full  bg-white ">
      <h2 className="text-large font-bold text-left text-gray-700 mb-6">
        Contact Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:gap-4">
          {/* Name Field  */}
          <div className="mb-4 flex-1">
            <label className="text-sm font-medium text-gray-700 hidden">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-3 block w-full text-gray-700  rounded-sm border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-small"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4 flex-1">
            <label className="hidden text-sm font-medium text-gray-700 ">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 p-3 block w-full text-gray-700  rounded-sm border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-small"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 hidden">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-3 block w-full text-gray-700  rounded-sm border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-small"
          />
        </div>

        {/* Service Dropdown */}
        <div className="mb-4">
          <label className="hidden text-sm font-medium text-gray-700">
            Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="mt-1 p-3 block w-full text-gray-700  rounded-sm border border-gray-300 shadow-sm focus:border-primary placeholder:text-small"
          >
            <option value="" disabled className="mx-3">
              Select a service
            </option>
            <option value="option1" >Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="hidden text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="mt-1 p-3 block w-full text-gray-700  rounded-sm border border-gray-300 shadow-sm focus:border-primary placeholder:text-small"
          />
        </div>

        {/* File Upload Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Files (Optional)
          </label>
          <div className="flex items-center space-x-4">
            {/* Custom file upload button */}
            <label
              htmlFor="file-input"
              className="bg-[#FEA500] text-white font-medium py-2 px-4 rounded-md cursor-pointer hover:bg-[#BC4C24] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Choose File(s)
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*,audio/*,video/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Error and Success Messages */}
        {error && (
          <div className="text-red-500 text-sm mt-2">
            <p>{error}</p>
          </div>
        )}
        {success && (
          <div className="text-green-500 text-sm mt-2">
            <p>{success}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-[#FEA500] w-full text-white font-medium py-2 px-4 rounded-md hover:bg-[#BC4C24] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {/* Preview Selected Files */}
      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Selected Files
          </h3>
          <ul className="mt-2 space-y-3">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-800"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-md flex justify-center items-center">
                    {file.type.startsWith("image") && <span>🖼️</span>}
                    {file.type.startsWith("audio") && <span>🎵</span>}
                    {file.type.startsWith("video") && <span>🎥</span>}
                    {!file.type && <span>📄</span>}
                  </div>
                  <span>{file.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 hover:text-red-700 transition duration-150"
                  >
                    ✖
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
