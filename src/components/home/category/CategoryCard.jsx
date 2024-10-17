/* eslint-disable react/prop-types */
function CategoryCard({ categoryName }) {
  return (
    <div className="boxBorderHoverBlue py-5 px-4 rounded-lg shadow-sm text-center flex justify-center items-center gap-2 cursor-pointer">
      <div>
        <h3 className="text-12 md:text-14">{categoryName}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
