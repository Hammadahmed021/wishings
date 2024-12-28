import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"

const OptionPicker = ({ options, onSelectionChange, selectedVal }) => {
  const [selectedOptions, setSelectedOptions] = useState([selectedVal]);

  console.log(
    "selectedValselectedValselectedValselectedValselectedVal",
    selectedVal
  );

  useEffect(() => {
  setSelectedOptions([selectedVal]);
},[])

  // Handle selection toggle
  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some(
      (item) => (item?.id ?? selectedVal?.id) === option?.id
    );

    // Toggle selection
    const updatedSelection = isSelected
      ? selectedOptions.filter(
          (item) => (item?.id ?? selectedVal?.id) !== option?.id
        ) // Remove if already selected
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
      <button
        onClick={handleReset}
        className="mb-4 px-4 py-1 text-sm font-normal text-white bg-red-500 border rounded-lg hover:bg-red-600"
      >
        Reset filter
      </button>
      <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 border rounded-lg pb-4 relative">
        <ul className="gap-2 flex items-center flex-wrap justify-start p-2">
          {options.map((option) => {
            const isSelected = selectedOptions.some(
              (item) => (item?.id ?? selectedVal?.id) === option?.id
            );

            return (
              <>
                <li
                  key={option?.id}
                  className={`px-2 py-1 gap-1 border rounded-lg cursor-pointer transition-all duration-500 flex items-center justify-between transform hover:scale-102 ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-white border-gray-300 hover:bg-primary hover:text-white  hover:border-primary"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-sm font-normal">{option?.name}</span>
                  {isSelected && <FaCheckCircle size={14} />}
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
            <ul className="flex items-center justify-start gap-2">
              {selectedOptions.map((option) => (
                <li
                  key={option?.id ?? selectedVal?.id}
                  className="text-sm font-normal text-gray-800 bg-gray-100 px-2 py-1 rounded"
                >
                  {option?.name ?? selectedVal?.name}
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
