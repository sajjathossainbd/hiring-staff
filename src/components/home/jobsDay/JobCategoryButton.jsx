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
      className={`bg-blue border border-lightGray rounded-lg  px-4 py-2 lg:px-6 lg:py-4 
        ${
          activeCategory === categoryItem
            ? "text-white  bg-[#F8FAFF] border-blue"
            : "bg-white text-blue border-[#B4C0E0]  px-4 py-2 lg:px-6 lg:py-4"
        }`}
    >
      <img
        src={categorySVGs[categoryItem]} // Use the correct category SVG
        alt={`${categoryItem} icon`}
        className="inline-block w-6 h-6 mr-2"
      />
      {categoryItem}
    </button>
  );
}

export default JobCategoryButton;
