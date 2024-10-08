 

import { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
 
function CandidatesFiltering() {
  const dispatch = useDispatch();
  
   const [professions, setProfessions] = useState([]);
   const [skills, setSkills] = useState([]);
   const [locations, setLocations] = useState([]);
   const [experience, setExperience] = useState([]);

   const [educationOptions, setEducationOptions] = useState([]);

  const [filters, setFilters] = useState({
    profession: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    jobType: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/candidates/unique');  
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

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="relative">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-3 lg:space-y-0 p-4 bg-lightText shadow-lg rounded-lg">
          
          {/* Profession */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaLayerGroup className="text-blue" />
            <select
              name="profession"
              onChange={handleFilterChange}
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            >
              <option value="">Select Profession</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Designer">Designer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>

          {/* Location Input */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <input
              type="text"
              name="location"
              onChange={handleFilterChange}
              placeholder="Enter Location"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
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
            <select
              name="skills"
              onChange={handleFilterChange}
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            >
              <option value="">Select Skill</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
            </select>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Experience</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value=""
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                All
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="Fresher"
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                Fresher
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="1 Year"
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                1 Year
              </label>
              {/* Add more options as needed */}
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <label className="block text-gray mb-2">Education</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="education"
                  value=""
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                All
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="education"
                  value="High School"
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                High School
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="education"
                  value="Intermediate"
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                Intermediate
              </label>
            </div>
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

          {/* Apply Filter Button */}
          <button
            onClick={applyFilters}
            className="bg-blue text-white px-4 py-2 rounded-lg w-full hover:bg-lightBlue transition duration-300"
          >
            Apply Filter
          </button>
        </div>

        {/* Overlay (for closing filter panel when clicking outside) */}
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
