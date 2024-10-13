import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLayerGroup, FaSlidersH } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import axiosInstance from "../../utils/axios";

import { PiLineVerticalThin } from "react-icons/pi";
import FilterSidePanel from "../candidate/FilterSidePanel";

function RecruitersFiltering() {
  const dispatch = useDispatch();

  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teamSizes, setTeamSizes] = useState([]);

  
  const initialFilters = {
    industry: "",
    country: "",
    city: "",
    teamSize: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axiosInstance.get("/recruiters/unique");
        console.log(data); // Log the response data to check its structure
        setIndustries(data.industries || []); // Default to an empty array if undefined
        setLocations(data.locations || []); // Default to an empty array if undefined
        setTeamSizes(data.teamSizes || []); // Default to an empty array if undefined
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
    setFilters(initialFilters);
    dispatch(fetchRecruitersListing(initialFilters));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  if (!industries || !locations || !teamSizes) {
    return <div>Loading...</div>; // or some kind of loading spinner
  }

  return (
    <div>
      <div className="relative bg-white md:p-2 p-5 rounded-2xl w-full">
        {/* Search Bar */}
        <div className="flex items-center md:flex-row flex-col md:gap-2 gap-3">
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
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </datalist>
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* Location */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <input
              type="text"
              name="country"
              onChange={handleFilterChange}
              placeholder="Enter Country"
              list="locations"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="locations">
              {locations.map((location) => (
                <option key={location} value={location} />
              ))}
            </datalist>
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* Team Size */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <input
              type="text"
              name="teamSize"
              onChange={handleFilterChange}
              placeholder="Enter Team Size"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
          </div>

          {/* Filter Button */}
          <button onClick={toggleFilter} className="rounded-md text-blue text-18 pr-2">
            <FaSlidersH />
          </button>

          {/* Search Button */}
          <button
            onClick={applyFilters}
            className="btn btn-primary border-none bg-blue text-white font-medium w-full md:w-36"
          >
            Search
          </button>
        </div>

        {/* Side Panel (Optional, you can customize this as needed) */}
        <FilterSidePanel
          filters={filters}
          industries={industries}
          locations={locations}
          teamSizes={teamSizes}
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
          handleFilterChange={handleFilterChange}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />
      </div>
    </div>
  );
}

export default RecruitersFiltering;
