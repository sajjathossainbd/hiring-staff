import GrowthSectionCard from "./GrowthSectionCard";

const CounterSection = () => {
  const growthSectionData = [
    {
      title: "Completed Cases",
      targetCount: 2500,
      subTitle: "Completed cases are analyzed to improve our procedures.",
    },
    {
      title: "Our Offices",
      targetCount: 17,
      subTitle: "Visit our offices for personalized service and support.",
    },
    {
      title: "Skilled People",
      targetCount: 86,
      subTitle:
        "Skilled people drive our company's growth and innovation forward.",
    },
    {
      title: "Happy Clients",
      targetCount: 28,
      subTitle:
        "See why our happy clients recommend our services with confidence.",
    },
  ];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-y-6 gap-x-16">
        {growthSectionData.map((data) => (
          <GrowthSectionCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
