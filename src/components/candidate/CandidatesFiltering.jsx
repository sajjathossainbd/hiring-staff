import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLayerGroup, FaSlidersH } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import axiosInstance from "../../utils/axios";
import FilterSidePanel from "./FilterSidePanel";
import { PiLineVerticalThin } from "react-icons/pi";
import Dropdown from "../shared/DropdownCandidate";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";
function CandidatesFiltering() {
  const { t } = useTranslation();
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
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
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
      <div className="relative bg-white border border-bgLightBlue shadow-md md:p-2 p-5 rounded-lg w-full">
        {/* Search Bar */}
        <div className="flex items-center md:flex-row flex-col md:gap-2 gap-3">
          {/* Profession   */}
          <div className="flex gap-2 items-center px-3">
            <FaLayerGroup className="text-blue" />
            <Dropdown
              options={professions}
              placeholder="All profession"
              onChange={(option) => handleFilterChange("profession", option)}
            />
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* Location */}
          <div className="flex gap-2 items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <Dropdown
              options={locations}
              placeholder="All location"
              onChange={(option) => handleFilterChange("location", option)}
            />
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* Filter Button */}
          <button
            onClick={toggleFilter}
            className="  rounded-md text-blue text-18 pr-2 "
          >
            <FaSlidersH />
          </button>

          {/* Search Button */}
          <button
            onClick={applyFilters}
            className=" text-white font-medium w-full md:w-36"
          >
            <PrimaryBtn title={<Trans i18nKey={"search"} />} />
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
