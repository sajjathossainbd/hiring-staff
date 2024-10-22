import { useDispatch, useSelector } from "react-redux";
import {
  setJobTitle,
  setCategory,
  setLocation,
} from "../../features/jobs/jobsFilter/filterSlice";

import { PiLineVerticalThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { fetchJobCategories } from "../../features/jobs/filterCollection/categories/jobCategoriesSlice";
import { fetchJobLocations } from "../../features/jobs/filterCollection/location/jobLocationsSlice";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { FaSlidersH } from "react-icons/fa";
import Dropdown from "./DropdownCandidate";
const SearchByFilter = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { JobTitle, AllCategory, Location } = useSelector(
    (state) => state.filters
  );
  const { categories } = useSelector((state) => state.jobCategories);
  const { locations } = useSelector((state) => state.jobLocations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative  bg-white p-5 md:p-2  shadow-md  rounded-lg  ">
      <div className="flex items-center md:flex-row flex-col md:gap-2 gap-1">
        {/* Job title input */}
        <label className="flex items-center w-auto p-3 text-14 rounded-md md:border-none border border-[#cfdefc]">
          <input
            type="text"
            className="outline-none w-full text-14 "
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
        <div className="w-auto">
          <Dropdown
            options={categories}
            onChange={(selected) => handleSelectChange(selected, "AllCategory")}
            placeholder={AllCategory || "All Category"}
          />
        </div>

        {/* Vertical line */}
        <PiLineVerticalThin className="md:block hidden" />

        {/* Filter Button */}
        <div className="w-auto">
          <button
            onClick={toggleFilter}
            className="rounded-md text-blue text-18 mr-2"
          >
            <FaSlidersH />
          </button>
        </div>

        {/* Search button */}
        <button onClick={showFilter} className="w-auto">
          <PrimaryBtn title={<Trans i18nKey={"Search"} />} />
        </button>
      </div>

      {/* Sidebar for filter */}
      {isFilterOpen && (
        <div
          className={`fixed z-50 top-0 left-0 h-full bg-white dark:bg-darkBlue shadow-lg w-64 p-5 overflow-y-scroll transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close */}
          <button
            className="text-gray text-18 hover:text-lightGray"
            onClick={toggleFilter}
          >
            &times;
          </button>

          <h4 className="mb-3">Filter Jobs</h4>

          <h6>Location</h6>
          <div className="border border-lightGray rounded-md p-1 mt-1">
            <Dropdown
              options={locations}
              onChange={(selected) => handleSelectChange(selected, "Location")}
              placeholder={Location || "All Location"}
            />
          </div>

          {/* Search button in the sidebar */}
          {/* <button onClick={showFilter} className="w-full mt-4">
            <PrimaryBtn title={"Apply Filter"} />
          </button> */}
        </div>
      )}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-lightText opacity-50"
          onClick={toggleFilter}
        ></div>
      )}
    </div>
  );
};

export default SearchByFilter;
