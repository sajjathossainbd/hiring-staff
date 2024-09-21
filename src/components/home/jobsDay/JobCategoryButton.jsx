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
      className={`bg-blue order-[.5px] rounded-lg text-14  px-4 py-2 lg:px-6 lg:py-4 
        ${
          activeCategory === categoryItem
            ? "text-white  bg-[#F8FAFF]"
            : "bg-softLightBlue border-[.5px] border-lightGray hover:border-blue text-blue  px-4 py-2 lg:px-6 lg:py-4"
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
