import { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaSlidersH,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import axiosInstance from "../../utils/axios";
import FilterSidePanel from "./FilterSidePanel";
import { PiLineVerticalThin } from "react-icons/pi";

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
      <div className="relative bg-white  md:p-2 p-5 rounded-2xl w-full">
        {/* Search Bar */}
        <div className="flex items-center md:flex-row flex-col md:gap-2 gap-3">
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

    
          <PiLineVerticalThin className="lg:block hidden" />

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

        
          <PiLineVerticalThin className="lg:block hidden" />

          {/* Filter Button */}
          <button onClick={toggleFilter} className="  rounded-md text-blue text-18 pr-2 ">
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
