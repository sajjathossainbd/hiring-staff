import { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { useDispatch } from "react-redux";

import axiosInstance from "../../utils/axios";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";

function Filter() {
  const dispatch = useDispatch();

  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teamSizes, setteamSizes] = useState([]);
  

  const initialFilters = {
    industry: "",
    location: "",
    teamSizes: "",
    
  };

  const [filters, setFilters] = useState(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axiosInstance.get("/recruiters/unique");

        setIndustries(data.industries || []);
      setLocations(data.locations || []);
      setteamSizes(data.teamSizes || []);
        console.log(data)
      } catch (error) {
        console.error("Error fetching filter data", error);
      }
    };

    fetchFilterData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    dispatch(fetchRecruitersListing(filters));
  };

  const resetFilters = () => {
    setFilters(initialFilters); // Reset filters to initial state
    dispatch(fetchRecruitersListing(initialFilters)); // Fetch all recruiters
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="relative">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-3 lg:space-y-0 p-4 bg-lightText shadow-lg rounded-lg">
          {/* Industry */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaLayerGroup className="text-blue" />
            <input
              type="text"
              name="industry"
              onChange={handleFilterChange}
              list="industries-list"
              placeholder="Select or Enter Industry"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="industries-list">
              {industries?.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </datalist>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <input
              type="text"
              name="location"
              onChange={handleFilterChange}
              placeholder="Enter Location"
              list="locations-list"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="locations-list">
              {locations?.map((location) => (
                <option key={location} value={location} />
              ))}
            </datalist>
          </div>

          {/* Filter Button */}
          <button
            onClick={toggleFilter}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 bg-lightGray text-blue w-full lg:w-auto"
          >
            <FaFilter />
            <span className="text-white">Filter</span>
          </button>

          {/* Search Button */}
          <button
            onClick={applyFilters}
            className="w-full lg:w-auto bg-blue text-white px-4 py-2 rounded-lg hover:bg-lightBlue transition duration-300"
          >
            Search Recruiters
          </button>
        </div>

        {/* Filter Side Panel */}
        <div
          className={`fixed z-50 top-0 left-0 h-full bg-white shadow-lg w-64 p-5 transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="text-gray hover:text-lightGray"
            onClick={toggleFilter}
          >
            &times;
          </button>
          <h4 className="mb-4">Filter</h4>

          {/* Company Size */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Industry Name</label>
            <input
              type="text"
              name="companySize"
              onChange={handleFilterChange}
              list="company-sizes-list"
              placeholder="Select or Enter Industry Name"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
            <datalist id="company-sizes-list">
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </datalist>
          </div>

          {/* Experience Level */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Number Of Employees</label>
            <input
              type="text"
              name="experienceLevel"
              onChange={handleFilterChange}
              list="experience-levels-list"
              placeholder="Select or Enter Number Of Employees"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
          <datalist id="company-sizes-list">
              {teamSizes.map((teamSize) => (
                <option key={teamSize} value={teamSize}>
                  {teamSize}
                </option>
              ))}
            </datalist>
          </div>

          <button
            onClick={applyFilters}
            className="bg-blue text-white px-4 py-2 rounded-lg w-full hover:bg-lightBlue transition duration-300"
          >
            Apply Filter
          </button>

          <button
            onClick={resetFilters}
            className="bg-gray text-white px-4 w-full mt-2 py-2 rounded-lg"
          >
            Reset Filters
          </button>
        </div>

        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleFilter}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Filter;
