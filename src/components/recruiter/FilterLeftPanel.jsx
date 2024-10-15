import { useState } from "react"; // Import useState at the top

function FilterLeftPanel({
  filters,
  industries,
  locations,
  teamSizes,
  isFilterOpen,
  toggleFilter,
  applyFilters,
  resetFilters,
}) {
  const [filterValues, setFilterValues] = useState({
    industries: filters.industries || '',
    location: filters.location || '',
    teamSizes: filters.teamSizes || ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={`fixed z-50 top-0 left-0 h-full bg-white dark:bg-darkBlue shadow-lg w-64 p-5 overflow-y-scroll transition-transform transform ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="text-gray hover:text-lightGray" onClick={toggleFilter}>
        &times;
      </button>
      <h4 className="mb-4">Filter</h4>

      {/* Industry */}
      <div className="mb-4">
        <label className="block text-gray dark:text-white mb-2">Industry</label>
        <select
          name="industries"
          value={filterValues.industries} 
          onChange={handleFilterChange}
          className="w-full border border-lightGray rounded-lg px-3 py-2"
        >
          <option value="">Select Industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-gray dark:text-white mb-2">Location</label>
        <select
          name="location"
          value={filterValues.location} 
          onChange={handleFilterChange}
          className="w-full border border-lightGray rounded-lg px-3 py-2"
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Team Size */}
      <div className="mb-4">
        <label className="block text-gray dark:text-white mb-2">Team Size</label>
        <select
          type="number"
          name="teamSizes"
          value={filterValues.team} 
          onChange={handleFilterChange}
          placeholder="Enter Team Size"
          className="w-full border border-lightGray rounded-lg px-3 py-2"
        >
        <option value="">Select Team Size</option>
          {teamSizes.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
          </select>
      </div>

      <button onClick={applyFilters} className="bg-blue text-white px-4 py-2 rounded-lg w-full hover:bg-lightBlue transition duration-300">
        Apply Filter
      </button>

      <button onClick={resetFilters} className="bg-gray text-white px-4 w-full mt-2 py-2 rounded-lg">
        Reset Filters
      </button>
    </div>
  );
}

export default FilterLeftPanel;
