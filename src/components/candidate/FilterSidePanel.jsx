import React from "react";

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
        <button className="text-gray hover:text-lightGray" onClick={toggleFilter}>
          &times;
        </button>
        <h4 className="mb-4">Filter</h4>

        {/* Skills */}
        <div className="mb-4">
          <label className="block text-gray dark:text-white mb-2">Skills</label>
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
          <label className="block text-gray dark:text-white mb-2">Experience</label>
          <div className="space-y-2">
            {experience.map((exp) => (
              <label key={exp} className="flex items-center dark:text-white">
                <input
                  type="radio"
                  name="experience"
                  value={exp}
                  className="mr-2"
                  onChange={handleFilterChange}
                />
                {exp || "All"}
              </label>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-gray dark:text-white mb-2">Education</label>
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
          <label className="block text-gray dark:text-white mb-2">Job Type</label>
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
