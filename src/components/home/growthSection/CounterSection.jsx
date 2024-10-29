import GrowthSectionCard from "./GrowthSectionCard";

const CounterSection = () => {
  const growthSectionData = [
    {
      title: "Our Offices",
      targetCount: 11,
      subTitle: "Visit our offices for personalized service and support.",
    },
    {
      title: "Skilled People",
      targetCount: 28,
      subTitle:
        "Skilled people drive our company's growth and innovation forward.",
    },
    {
      title: "Happy Clients",
      targetCount: 156,
      subTitle:
        "See why our happy clients recommend our services with confidence.",
    },
    {
      title: "Completed Cases",
      targetCount: 190,
      subTitle: "Completed cases are analyzed to improve our procedures.",
    },
  ];

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-3">
        {growthSectionData.map((data) => (
          <GrowthSectionCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
