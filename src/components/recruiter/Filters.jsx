const Filters = ({
  showCount,
  setShowCount,
  setCurrentPage,
  sortOrder,
  setSortOrder,
  currentPage,
  sortedRecruitersLength = 0, // Default to 0 if undefined
}) => {
  return (
    <div className="flex md:justify-between flex-col md:flex-row items-center border-b-2 border-[#F8FAFF] pb-2 mb-4">
      {/* Left Side - Showing results */}
      <div>
        <p className="text-lightGray">
          Showing{" "}
          {Math.min((currentPage - 1) * showCount + 1, sortedRecruitersLength)}
          –{Math.min(currentPage * showCount, sortedRecruitersLength)} of{" "}
          {sortedRecruitersLength} results
        </p>
      </div>

      {/* Right Side - Filters */}
      <div className="flex gap-4 items-center">
        {/* Show count filter */}
        <div className="flex items-center">
          <label htmlFor="show" className="mr-2 text-lightGray">
            Show:
          </label>
          <select
            id="show"
            value={showCount}
            onChange={(e) => {
              setShowCount(Number(e.target.value));
              setCurrentPage(1); // Reset to the first page after changing show count
            }}
            className="border border-[#F8FAFF] rounded-md p-1"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </div>

        {/* Sorting filter */}
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-lightGray">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-[#F8FAFF] rounded-md p-1"
          >
            <option value="default">Default Sorting</option>
            <option value="latest">Sort by Latest</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
