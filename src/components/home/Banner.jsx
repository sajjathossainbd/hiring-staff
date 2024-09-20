import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/home/banner.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../shared/PrimaryButton";
import { FaSearch } from "react-icons/fa";


const Banner = () => {
  const popularSearches = [
    "Content Writer",
    "Finance",
    "Human Resource",
    "Management",
  ];

  // State for all search inputs (Option, Location, and Keyword)
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

    // Log the updated search data
    console.log(updatedSearchData);
  };

  return (
    <div className="bg-banner-image bg-center bg-cover min-h-[80vh] px-4 lg:pb-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-20">
          <div className="lg:w-1/2 w-full flex flex-col gap-8">
            <h2>
              Accelerate <br className="lg:block hidden" /> Your Hiring with Our
              <br className="lg:block hidden" />
              <span className="text-blue"> Job Search </span>
              Solutions
            </h2>
            <p className="text-18">
              Every month, 3 million job seekers use our platform, submitting
              over 140,000 applications daily to explore new opportunities and
              connect with potential employers.
            </p>
            <div className="flex lg:flex-row flex-col items-center px-4 rounded-2xl bg-white">
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
                        <li className="p-2 text-gray-500">
                          No locations found
                        </li>
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
                <PrimaryButton onClickBtn={handleSearch} title={"Search"} icon={<FaSearch />} />
              </div>
            </div>
            {/* popular researches */}
            <div>
              <strong className="text-sm">Popular Researches: </strong>
              {popularSearches.map((searches, index) => (
                <Link className="text-sm hover:underline" key={index} to={""}>
                  {searches} ,
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-10/12 flex justify-center">
            <img
              className="w-auto h-full object-cover"
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
