/* eslint-disable react/prop-types */
const CategoryCard = ({ categoryName, onCategoryClick }) => {
  return (
    <div
      className="boxBorderHoverBlue py-5 px-4 rounded-lg shadow-sm text-center flex justify-center items-center gap-2 cursor-pointer bg-white"
      onClick={() => onCategoryClick(categoryName)}
    >
      <div>
        <h3 className="text-12 md:text-14">{categoryName}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
