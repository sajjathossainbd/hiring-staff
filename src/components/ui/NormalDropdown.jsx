/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const NormalDropdown = ({ dynamicOptions, placeholderData }) => {
  const [placeholder, setPlaceholder] = useState(placeholderData);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
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
    if (option === selectedOption) {
      setSelectedOption(placeholder);
    } else {
      setSelectedOption(option);
      setPlaceholder(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-full py-2 text-16 font-medium rounded-md"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{selectedOption}</span>
        <FiChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 bg-white mt-2 origin-top-right rounded-md shadow-lg">
          <div className="py-1">
            {dynamicOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block w-full text-left px-4 py-2 text-16 text-darkBlue ${
                  option === selectedOption ? "bg-blue-200" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NormalDropdown;
