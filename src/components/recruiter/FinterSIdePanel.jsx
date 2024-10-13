

function FilterSidePanel({
    filters,
    industries,
    locations,
    teamSizes,
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
  
          {/* industrys */}
          <div className="mb-4">
            <label className="block text-gray dark:text-white mb-2">industrys</label>
            <input
              type="text"
              name="industrys"
              onChange={handleFilterChange}
              list="industry-list"
              placeholder="Select or Enter industrys"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
            <datalist id="industry-list">
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </datalist>
          </div>
  
          {/* location */}
          <div className="mb-4">
            <label className="block text-gray dark:text-white mb-2">location</label>
            <div className="space-y-2">
              {location.map((exp) => (
                <label key={exp} className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="location"
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
            <label className="block text-gray dark:text-white mb-2">Team Size</label>
            <input
              type="text"
              name="teamSize"
              onChange={handleFilterChange}
              list="teamSize-list"
              placeholder="Select or Team Size"
              className="w-full border border-lightGray rounded-lg px-3 py-2"
            />
            <datalist id="teamSize-list">
              {teamSizes.map((teamSize) => (
                <option key={teamSize} value={teamSize}>
                  {teamSize}
                </option>
              ))}
            </datalist>
          </div>
  
          {/* Job Type */}
          
  
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
  