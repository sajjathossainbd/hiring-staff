/* eslint-disable react/prop-types */
import React from "react";
import Dropdown from "../shared/DropdownCandidate";

function FilterSidePanel({
  filters,
  professions,
  skills,
  experience,
  educationOptions,
  isFilterOpen,
  toggleFilter,
  handleFilterChange,
  applyFilters,
  resetFilters,
}) {
  return (
    <>
      {/* Side Panel */}
      <div
        className={`fixed z-50 top-0 left-0 h-full bg-white dark:bg-darkBlue shadow-lg w-64 p-5 overflow-y-scroll transition-transform transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          className="text-gray hover:text-lightGray"
          onClick={toggleFilter}
        >
          &times;
        </button>
        <h4 className="mb-4">Filter</h4>

        {/* Skills */}
        <div className="mb-4">
          <h6 className="block text-gray dark:text-white mb-2">Skills</h6>
          <div className="border border-lightGray rounded-md p-1">
            <Dropdown
              options={skills}
              placeholder="Skills"
              onChange={(option) => handleFilterChange("skills", option)}
            />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h6 className="block text-gray dark:text-white mb-2">Experience</h6>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value=""
                className="mr-2"
                onChange={(e) =>
                  handleFilterChange("experience", e.target.value)
                }
              />
              All
            </label>

            {experience.map((exp) => (
              <label key={exp} className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value={exp}
                  className="mr-2"
                  onChange={(e) =>
                    handleFilterChange("experience", e.target.value)
                  }
                />
                {exp}
              </label>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h6 className="block text-gray dark:text-white mb-2">Education</h6>
          <div className="border border-lightGray rounded-md p-1">
            <Dropdown
              options={educationOptions}
              placeholder="Educations"
              onChange={(option) => handleFilterChange("education", option)}
            />
          </div>
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block text-gray dark:text-white mb-2">
            Job Type
          </label>
          <select
            name="jobType"
            onChange={(e) => handleFilterChange("jobType", e.target.value)}
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
          className="bg-blue  text-white px-4 py-2 rounded-lg w-full hover:bg-lightBlue transition duration-300"
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
    </>
  );
}

export default FilterSidePanel;
