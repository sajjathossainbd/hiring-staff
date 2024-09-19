import GrowthSectionCard from "./GrowthSectionCard";

const CounterSection = () => {
  const growthSectionData = [
    { title: "Completed Cases", targetCount: 25000 },
    { title: "Our Offices", targetCount: 17 },
    { title: "Skilled People", targetCount: 86 },
    { title: "Happy Clients", targetCount: 28 },
  ];

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {growthSectionData.map((data) => (
          <GrowthSectionCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
