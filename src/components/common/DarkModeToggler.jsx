import React from "react";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";

const DarkModeToggler = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center justify-left duration-300">
      {/* Toggler Container */}
      <div className="relative w-16 h-[31px] rounded-full bg-gray-300 dark:bg-gray-600 transition duration-200 ease-in-out dark:shadow-sm dark:shadow-primary">
        {/* White Circle (Moving in the background) */}
        <div
          className={`absolute top-[3px] left-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ease-in-out transform ${
            isDarkMode ? "translate-x-8" : ""
          }`}
          style={{ zIndex: 1 }}
        ></div>

        {/* Clickable Button */}
        <button
          onClick={toggleDarkMode}
          className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
          aria-label="Toggle dark mode"
          style={{ zIndex: 3 }}
        />

        {/* Icons (Foreground) */}
        <div
          className="flex justify-between gap-3 px-[7px] top-[7px] text-gray-600 relative"
          style={{ zIndex: 2 }}
        >
          <img
            src={sun}
            alt="Sun Icon"
            className={`h-[18px] ${
              isDarkMode
                ? "opacity-50 dark:filter dark:brightness-0 dark:invert"
                : "opacity-100"
            }`}
          />
          <img
            src={moon}
            alt="Moon Icon"
            className={`h-[16px] ${
              isDarkMode ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggler;
