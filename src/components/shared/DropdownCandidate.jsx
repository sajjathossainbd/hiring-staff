/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({
  options,
  placeholder = "Select",
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
    } else if (typeof option === "object" && option !== null) {
      setSelectedOption(option.label); // Set the label as the selected option
      onChange(option); // Pass the entire object to the parent
    } else {
      setSelectedOption(option); // Handle primitive types
      onChange(option);
    }
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) => {
    if (!option) return false;
    const valueToFilter = typeof option === "object" ? option.label : option;
    return valueToFilter
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <div className="lg:w-full w-40  flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full py-2 text-14 text-gray bg-white focus:outline-none"
        >
          <div className="flex items-center min-w-24">{selectedOption}</div>
          <FiChevronDown
            className={`ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 w-full bg-white border border-lightGray rounded-md mt-1 shadow-lg max-h-60 overflow-y-scroll"
          role="menu"
        >
          <div className="p-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-lightGray rounded-md focus:outline-none"
            />
          </div>

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

            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={typeof option === "object" ? option.id : option} // Use a unique identifier if option is an object
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray hover:bg-lightText focus:outline-none`}
                  role="menuitem"
                >
                  {typeof option === "object" ? option.label : option}
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
