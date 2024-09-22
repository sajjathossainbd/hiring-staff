function GrowthSectionCard(data) {
  const { title, subTitle,  targetCount } = data;

  return (
    <div className="p-4 rounded-lg">
      <p className="font-medium text-gray-500 mb-2">
        {subTitle}
      </p>
      <h3 className="text-xl font-bold text-darkBlue mt-4">{title}</h3>
      <h1 className=" text-blue mt-2">{targetCount}+</h1>
    </div>
  );
}

export default GrowthSectionCard;
