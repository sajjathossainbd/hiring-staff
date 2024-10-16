function CategoryCard(category) {
  const { img, name, jobs } = category;
  return (
    <div className="boxBorderHoverBlue py-5 px-4 rounded-lg shadow-sm text-center flex justify-center items-center gap-2 cursor-pointer">
      <div className="flex justify-center items-center ">
        <img src={img} alt="img" />
      </div>
      <div>
        <h3 className="text-12 md:text-14">{name}</h3>
        <p className="text-12 mt-2">{jobs}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
