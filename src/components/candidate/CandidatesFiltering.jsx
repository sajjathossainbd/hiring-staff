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
import axios from "axios";

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
    setFilters(initialFilters); // Reset filters to initial state
    dispatch(fetchCandidatesListing(initialFilters)); // Fetch all candidates
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="relative">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-3 lg:space-y-0 p-4 bg-lightText shadow-lg rounded-lg">
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

          {/* Location   */}
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

          {/* Skills */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              onChange={handleFilterChange}
              list="skills-list"
              placeholder="Select or Enter Skills"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
            <datalist id="skills-list">
              {skills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </datalist>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Experience</label>
            <div className="space-y-2">
              {experience.map((experience) => (
                <label key={experience} className="flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value={experience}
                    className="mr-2"
                    onChange={handleFilterChange}
                  />
                  {experience || "All"}
                </label>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Education</label>
            <input
              type="text"
              name="education"
              onChange={handleFilterChange}
              list="education-list"
              placeholder="Select or Enter Education Level"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
            <datalist id="education-list">
              {educationOptions.map((education) => (
                <option key={education} value={education}>
                  {education}
                </option>
              ))}
            </datalist>
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Job Type</label>
            <select
              name="jobType"
              onChange={handleFilterChange}
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            >
              <option value="">Select Job Type</option>
              <option value="Remote">Remote</option>
              <option value="On-Site">On-Site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
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

export default CandidatesFiltering;
