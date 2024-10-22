import { useDispatch, useSelector } from "react-redux";
import {
  setJobTitle,
  setCategory,
  setLocation,
} from "../../features/jobs/jobsFilter/filterSlice";
import Dropdown from "./Dropdown";
import { PiLineVerticalThin } from "react-icons/pi";
import { useEffect } from "react";
import { fetchJobCategories } from "../../features/jobs/filterCollection/categories/jobCategoriesSlice";
import { fetchJobLocations } from "../../features/jobs/filterCollection/location/jobLocationsSlice";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans } from "react-i18next";
const SearchByFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { JobTitle, AllCategory, Location } = useSelector(
    (state) => state.filters
  );
  const { categories } = useSelector((state) => state.jobCategories);
  const { locations } = useSelector((state) => state.jobLocations);

  useEffect(() => {
    dispatch(fetchJobCategories());
    dispatch(fetchJobLocations());
  }, [dispatch]);

  // Job Title input
  const handleJobTitleChange = (e) => {
    dispatch(setJobTitle(e.target.value));
  };

  // Category and Location
  const handleSelectChange = (selected, dropdown) => {
    if (dropdown === "AllCategory") {
      dispatch(setCategory(selected));
    } else if (dropdown === "Location") {
      dispatch(setLocation(selected));
    }
  };

  // Find Jobs function
  const showFilter = async () => {
    try {
      const filters = {
        category: AllCategory,
        job_title: JobTitle,
        job_location: Location,
      };
      navigate("/jobs-listing/1");
      dispatch(fetchJobsListing(filters));
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
  };


  return (
    <div className="relative bg-white border shadow-md border-bgLightBlue md:p-2 p-5 rounded-lg">
      <div className="flex items-center md:flex-row flex-col md:gap-2 gap-3">
        {/* Job title input */}
        <label className="flex items-center py-2 rounded-md px-3 md:w-32  md:border-none border border-[#cfdefc]">
          <input
            type="text"
            className="outline-none w-full text-14 placeholder:font-medium"
            placeholder="Search"
            value={JobTitle}
            onChange={handleJobTitleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {/* Vertical line */}
        <PiLineVerticalThin className="md:block hidden" />

        {/* Categories Dropdown */}
        <Dropdown
          options={categories}
          onChange={(selected) => handleSelectChange(selected, "AllCategory")}
          placeholder={AllCategory || "All Category"}
        />

        {/* Vertical line */}
        <PiLineVerticalThin className="md:block hidden" />

        {/* Locations Dropdown */}
        <Dropdown
          options={locations}
          onChange={(selected) => handleSelectChange(selected, "Location")}
          placeholder={Location || "All Location"}
        />

        {/* Search button */}
        <button onClick={showFilter} className="w-40">
          <PrimaryBtn title={<Trans i18nKey={"searchJobBtn"}/>} />
        </button>
      </div>
    </div>
  );
};

export default SearchByFilter;
