import React, { useState } from "react";

const OptionPicker = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle selection toggle
  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some((item) => item.id === option.id);

    // Toggle selection
    const updatedSelection = isSelected
      ? selectedOptions.filter((item) => item.id !== option.id) // Remove if already selected
      : [...selectedOptions, option]; // Add if not selected

    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection); // Pass updated selection to parent
  };

  // Reset selections
  const handleReset = () => {
    setSelectedOptions([]);
    onSelectionChange([]); // Notify parent
  };

  return (
    <div className="mb-10 max-w-lg ">
      <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-6 ">
        Select Audio Categories
      </h2>
      <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 border rounded-lg pb-4 relative">
      <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 border rounded-lg hover:bg-red-600 block w-full"
                >
                  Reset filter
                </button>
        <ul className="gap-4 flex items-center flex-wrap justify-between p-4">
          {options.map((option) => {
            const isSelected = selectedOptions.some(
              (item) => item.id === option.id
            );

            return (
              <>
               
                <li
                  key={option.id}
                  className={`px-2 py-1 border rounded-lg cursor-pointer transition-all duration-500 flex items-center justify-between transform hover:scale-102 ${
                    isSelected
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                      : "bg-gray-50 border-gray-300 hover:bg-blue-100 hover:border-blue-400"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-sm font-normal">{option?.name}</span>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-between mt-5">
        {selectedOptions.length > 0 && (
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-black mb-2">
              Selected Categories:
            </h3>
            <ul className="flex items-center justify-between gap-2">
              {selectedOptions.map((option) => (
                <li
                  key={option.id}
                  className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded"
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionPicker;
