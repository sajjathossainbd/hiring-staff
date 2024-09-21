/* eslint-disable react/prop-types */
function JobCategoryButton({
  categoryItem,
  handleCategoryClick,
  activeCategory,
  categorySVGs,
}) {
  return (
    <button
      onClick={() => handleCategoryClick(categoryItem)}
      className={`rounded-lg text-14 px-4 py-2 lg:px-6 lg:py-4 
        ${
          activeCategory === categoryItem
            ? "text-white bg-blue" // Active category: white text on blue background
            : "bg-[#F8FAFF] border-[.5px] border-lightGray hover:border-blue text-blue" // Default: text blue on light background
        }`}
    >
      <img
        src={categorySVGs[categoryItem]}
        alt={`${categoryItem} icon`}
        className="inline-block w-6 h-6 mr-2"
      />
      {categoryItem}
    </button>
  );
}

export default JobCategoryButton;
