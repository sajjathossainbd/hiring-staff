function GrowthSectionCard(data) {
  const { title, targetCount } = data;

  return (
    <div className="bg-white p-4 rounded-lg">
      <p className="font-medium text-gray-500 mb-2">
        We always provide people a complete solution upon focus of any business
      </p>
      <h3 className="text-xl font-bold text-darkBlue mb-4">{title}</h3>
      <h1 className="text-6xl font-bold text-blue">{targetCount}+</h1>
    </div>
  );
}

export default GrowthSectionCard;
