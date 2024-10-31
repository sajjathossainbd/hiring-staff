/* eslint-disable react/prop-types */
const CategoryCard = ({ categoryName, emoji, onCategoryClick }) => {
  return (
    <div
      className="boxBorderHoverBlue py-5 px-4 rounded-lg shadow-sm text-center flex justify-center items-center gap-2 cursor-pointer bg-bgLightBlue dark:bg-darkBlue text-white"
      onClick={() => onCategoryClick(categoryName)}
    >
      <div className="md:flex lg:flex items-center lg:flex-row flex-col gap-y2 md:gap-x-2 lg:gap-x-2">
        <h3>{emoji}</h3>
        <h3 className="text-12 md:text-14">{categoryName}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
