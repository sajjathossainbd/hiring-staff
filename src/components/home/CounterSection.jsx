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
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-4 sm:gap-3 text-center">
        {growthSectionData.map((data) => (
          <GrowthSectionCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
