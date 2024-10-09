import React, { useState } from "react";
import sun from "../assets/icons/sun.svg"; // Replace with your actual sun image path
import moon from "../assets/icons/moon.svg"; // Replace with your actual moon image path

const DarkModeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex items-center justify-left  duration-300`}>
      {/* Toggler Container */}
      <div className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition duration-300 ease-in-out">
        {/* White Circle (Moving in the background) */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out transform ${
            isDarkMode ? "translate-x-8" : ""
          }`}
          style={{ zIndex: 1 }} // Ensure circle stays in the background
        ></div>

        {/* Clickable Button */}
        <button
          onClick={toggleDarkMode}
          className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
          aria-label="Toggle dark mode"
          style={{ zIndex: 3 }} // Allows the button to be clickable but keeps the icons above
        />

        {/* Icons (Foreground) */}
        <div
          className="flex justify-between gap-3 px-[7px] top-[7px] text-gray-600 dark:text-gray-200 relative"
          style={{ zIndex: 2 }}
        >
          <img
            src={sun}
            alt="Sun Icon"
            className={`${isDarkMode ? "opacity-50" : "opacity-100"}`}
          />
          <img
            src={moon}
            alt="Moon Icon"
            className={`${isDarkMode ? "opacity-100" : "opacity-50"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggler;
