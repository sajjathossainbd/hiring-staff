/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
const Dropdown = ({ options, placeholder = "Select an option", onChange }) => {
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
      onChange(option, selectedOption);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="md:w-40 flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-full py-2 text-sm font-medium rounded-md text-[#818896]"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="font-medium">{selectedOption}</span>
          <div className="flex items-center">
            <FiChevronDown
              className={`ml-2 mt-[2px] transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-[130%] z-10 md:min-w-36 w-48 bg-white mt-2 origin-top-right rounded-md"
          role="menu"
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none ${
                  option === selectedOption ? "bg-blue-200" : ""
                }`}
                role="menuitem"
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

export default Dropdown;
