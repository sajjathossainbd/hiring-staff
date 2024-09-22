import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { FaSearch } from "react-icons/fa";
const SearchByFilter = () => {
  const [searchData, setSearchData] = useState({
    option: "Industry",
    location: "Location",
    keyword: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");

  const dropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  const options = [
    "Han Solo",
    "Content Writer",
    "Luke Skywalker",
    "Leia Organa",
  ];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Dallas"];

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(locationSearchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const toggleLocationDropdown = () => {
    setIsLocationOpen(!isLocationOpen);
    setLocationSearchTerm("");
  };

  const handleSelect = (option) => {
    setSearchData((prevData) => ({
      ...prevData,
      option: option,
    }));
    setIsOpen(false);
  };

  const handleLocationSelect = (location) => {
    setSearchData((prevData) => ({
      ...prevData,
      location: location,
    }));
    setIsLocationOpen(false);
  };

  const handleKeywordChange = (e) => {
    setSearchData((prevData) => ({
      ...prevData,
      keyword: e.target.value,
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, locationDropdownRef]);

  const handleSearch = () => {
    const updatedSearchData = {
      ...searchData,
      option: searchData.option === "Industry" ? null : searchData.option,
      location: searchData.location === "Location" ? null : searchData.location,
      keyword: searchData.keyword === "" ? null : searchData.keyword,
    };

    console.log(updatedSearchData);
  };
  return (
    <div className="flex lg:w-auto w-full lg:flex-row flex-col items-center px-4 rounded-2xl bg-white">
      <div
        className="lg:w-1/4 lg:mb-0 mb-3 py-5 w-full lg:border-r-2 h-8 border-[#D2D4D7] relative flex items-center"
        ref={dropdownRef}
      >
        <div
          className="select rounded-none w-full cursor-pointer flex items-center"
          onClick={toggleDropdown}
        >
          {searchData.option}
        </div>

        {/* dropdown for industry */}
        {isOpen && (
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="500"
            className="absolute lg:top-14 top-8 z-10 bg-white w-full mt-1 max-h-48 overflow-y-auto overflow-x-hidden px-1"
          >
            <input
              type="text"
              className="rounded-md outline-none border w-full p-2"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <ul>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li
                    key={option}
                    className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No options found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Dropdown for Location */}
      <div
        className="lg:w-1/4 lg:mb-0 mb-3 py-5 w-full lg:border-r-2 h-8 border-[#D2D4D7] relative flex items-center"
        ref={locationDropdownRef}
      >
        <div
          className="select rounded-none w-full cursor-pointer flex items-center"
          onClick={toggleLocationDropdown}
        >
          {searchData.location}
        </div>

        {isLocationOpen && (
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="500"
            className="absolute lg:top-14 top-8 z-10 bg-white w-full mt-1 max-h-48 overflow-y-auto overflow-x-hidden px-1"
          >
            <input
              type="text"
              className="rounded-md outline-none border w-full p-2"
              placeholder="Search location..."
              value={locationSearchTerm}
              onChange={(e) => setLocationSearchTerm(e.target.value)}
              autoFocus
            />
            <ul>
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location) => (
                  <li
                    key={location}
                    className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No locations found</li>
              )}
            </ul>
          </div>
        )}
      </div>
      {/* keywords search */}
      <div className="lg:w-1/4 lg:mb-0 mb-3 py-5 w-full">
        <input
          className="h-full outline-none px-4 rounded-none w-full flex items-center text-sm text-[#1F2937] placeholder-[#1F2937]"
          type="text"
          name="keywords"
          id="keywords"
          placeholder="Keyword"
          value={searchData.keyword}
          onChange={handleKeywordChange}
        />
      </div>
      {/* search button */}
      <div className="lg:w-1/4 lg:mb-0 mb-3 py-5 w-full">
        <PrimaryButton
          onClickBtn={handleSearch}
          title={"Search"}
          icon={<FaSearch />}
        />
      </div>
    </div>
  );
};

export default SearchByFilter;
