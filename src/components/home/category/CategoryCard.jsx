const CategoryCard = ({ categoryName, jobCount, onCategoryClick }) => {
  return (
    <div
      className="boxBorderHoverBlue py-5 px-4 rounded-lg shadow-sm text-center flex justify-center items-center gap-2 cursor-pointer bg-white"
      onClick={() => onCategoryClick(categoryName)}
    >
      <div>
        <h3 className="text-12 md:text-14">{categoryName}</h3>
        <p className="text-sm text-gray-500">{jobCount} jobs available</p>{" "}
        {/* Display job count */}
      </div>
    </div>
  );
};

export default CategoryCard;
