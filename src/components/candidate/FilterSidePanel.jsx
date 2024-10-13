import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";

const FilterSidePanel = ({ isFilterOpen, toggleFilter, setFilters }) => {
  const dispatch = useDispatch();
  const [industries, setIndustries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [teamSizes, setTeamSizes] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTeamSize, setSelectedTeamSize] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch unique data for filters on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/recruiters/unique"
        );
        const { industries, countries, cities, teamSizes } = response.data.uniqueData;
        setIndustries(industries);
        setCountries(countries);
        setCities(cities);
        setTeamSizes(teamSizes);
      } catch (error) {
        console.error("Error fetching filter data", error);
      }
    };

    fetchData();
  }, []);

  // Handle the filter submission
  const handleFilterChange = () => {
    setFilters({
      industry: selectedIndustry,
      country: selectedCountry,
      city: selectedCity,
      teamSize: selectedTeamSize,
      search: searchTerm,
    });
    dispatch(fetchCandidatesListing({
      industry: selectedIndustry,
      country: selectedCountry,
      city: selectedCity,
      teamSize: selectedTeamSize,
      search: searchTerm,
    }));
  };

  return (
    <>
      {/* Side Panel */}
      <div
        className={`fixed z-50 top-0 left-0 h-full bg-white dark:bg-darkBlue shadow-lg w-64 p-5 overflow-y-scroll transition-transform transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <button className="text-gray hover:text-lightGray" onClick={toggleFilter}>
          &times;
        </button>
        <h4 className="mb-4">Filter Candidates</h4>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Companies..."
          className="border p-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Industry Dropdown */}
        <select
          className="border p-2 mb-4 w-full"
          value={selectedIndustry}
          onChange={(e) => {
            setSelectedIndustry(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select Industry</option>
          {industries.map((industry, index) => (
            <option key={index} value={industry}>
              {industry}
            </option>
          ))}
        </select>

        {/* Country Dropdown */}
        <select
          className="border p-2 mb-4 w-full"
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedCity(""); // Reset city when country changes
            handleFilterChange();
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* City Dropdown */}
        <select
          className="border p-2 mb-4 w-full"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Team Size Dropdown */}
        <select
          className="border p-2 mb-4 w-full"
          value={selectedTeamSize}
          onChange={(e) => {
            setSelectedTeamSize(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Select Team Size</option>
          {teamSizes.map((size, index) => (
            <option key={index} value={size}>
              {size} Employees
            </option>
          ))}
        </select>

        {/* Apply Filters Button */}
        <button
          onClick={handleFilterChange}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </div>

      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleFilter}
        ></div>
      )}
    </>
  );
};

export default FilterSidePanel;
