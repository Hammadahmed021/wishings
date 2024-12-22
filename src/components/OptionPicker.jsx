import React, { useState } from "react";

const OptionPicker = ({ options, onSelect, selectedVal,}) => {
  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Select an Option</h2>
      <ul className="space-y-2">
      
        {options.map((option) => (
          <li
            key={option.id}
            className={`p-3 border rounded-md cursor-pointer transition-all ${
              selectedVal?.id === option.id
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300 hover:shadow-md"
            }`}
            onClick={() => onSelect(option)}
          >
            {option?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionPicker;
