 
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import axiosInstance from "../../utils/axios";
import FilterSidePanel from "./FilterSidePanel";  

function CandidatesFiltering() {
  const dispatch = useDispatch();

  const [professions, setProfessions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [locations, setLocations] = useState([]);
  const [experience, setExperience] = useState([]);
  const [educationOptions, setEducationOptions] = useState([]);

  const initialFilters = {
    profession: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    jobType: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axiosInstance.get("/candidates/unique");

        setProfessions(data.professions);
        setSkills(data.skills);
        setLocations(data.cities);
        setExperience(data.experience);
        setEducationOptions(data.education);
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
    dispatch(fetchCandidatesListing(filters));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    dispatch(fetchCandidatesListing(initialFilters));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="relative">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-3 lg:space-y-0 p-4 lg:py-7 bg-lightText shadow-lg rounded-lg">
          {/* Profession   */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaLayerGroup className="text-blue" />
            <input
              type="text"
              name="profession"
              onChange={handleFilterChange}
              list="professions-list"
              placeholder="Select or Enter Profession"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="professions-list">
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
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
              list="locations"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="locations">
              {locations.map((location) => (
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
            Search Candidates
          </button>
        </div>

        {/* Side Panel  */}
        <FilterSidePanel
          filters={filters}
          professions={professions}
          skills={skills}
          experience={experience}
          educationOptions={educationOptions}
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

export default CandidatesFiltering;
