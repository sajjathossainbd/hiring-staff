import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({
  options,
  placeholder = "Select ",
  onChange,
  neutralOption = "All",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const [searchTerm, setSearchTerm] = useState("");
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
    if (option === neutralOption) {
      setSelectedOption(placeholder);
      onChange("");
    } else {
      setSelectedOption(option);
      onChange(option);
    }
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <div className="w-full flex items-center">
        {/* Dropdown Toggle */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full py-2 px-3 text-14 text-gray bg-white   focus:outline-none   "
        >
          <div className="flex items-center min-w-32 ">{selectedOption}</div>
          <FiChevronDown
            className={`ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 w-full bg-white border border-lightGray rounded-md mt-1 shadow-lg max-h-60  overflow-y-scroll "
          role="menu"
        >
          {/* Search Input */}
          <div className="p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-lightGray rounded-md focus:outline-none  "
            />
          </div>

          {/* Dropdown Options */}
          <div className="py-1">
            <button
              onClick={() => handleOptionClick(neutralOption)}
              className={`block w-full text-left px-4 py-2 text-sm text-gray focus:outline-none ${
                selectedOption === neutralOption ? "" : "bg-lightText"
              }`}
              role="menuitem"
            >
              {neutralOption}
            </button>

            {/* Filtered Options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray hover:bg-lightText focus:outline-none ${
                    option === selectedOption ? "" : ""
                  }`}
                  role="menuitem"
                >
                  {option}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-gray text-sm">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
