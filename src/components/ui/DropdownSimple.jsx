/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const DropdownSimple = ({
  dynamicOptions,
  placeholderData,
  onOptionSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    dynamicOptions.find((option) => option.label === placeholderData) ||
      dynamicOptions[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (onOptionSelect) {
      onOptionSelect(option.label);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full py-2 text-16 font-medium rounded-md"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img className="w-6 mr-2" src={selectedOption.icon} alt="" />
        <span>{selectedOption.label}</span>
        <FiChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 bg-white mt-2 origin-top-right rounded-md shadow-lg">
          <div className="py-1">
            {dynamicOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOptionClick(option)}
                className={`flex gap-1 items-center w-full text-left px-4 py-2 text-16 text-darkBlue ${
                  option.label === selectedOption.label ? "bg-blue-200" : ""
                }`}
              >
                <img className="w-6" src={option.icon} alt="" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSimple;
