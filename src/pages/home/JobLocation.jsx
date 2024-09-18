import SectionTitle from "../../components/shared/SectionTitle";

const JobLocation = () => {
  const jobData = [
    {
      country: "France",
      description: "One opportunity available.",
      vacancies: 1,
    },
    { country: "Japan", description: "Two positions open.", vacancies: 2 },
    {
      country: "Canada",
      description: "One job opportunity available.",
      vacancies: 1,
    },
    { country: "UK", description: "Two job openings available.", vacancies: 2 },
    {
      country: "Australia",
      description: "One position available.",
      vacancies: 1,
    },
    { country: "India", description: "Three positions open.", vacancies: 3 },
    {
      country: "South Korea",
      description: "Two positions available.",
      vacancies: 2,
    },
    {
      country: "Brazil",
      description: "One job position available.",
      vacancies: 1,
    },
    {
      country: "South Africa",
      description: "Two openings available.",
      vacancies: 2,
    },
  ];

  const getGridClasses = (index) => {
    switch (index) {
      case 0:
        return "col-span-1";
      case 1:
        return "col-span-2";
      case 2:
        return "col-span-3 col-start-4";
      case 3:
        return "col-start-6 row-start-2";
      case 4:
        return "col-span-2 col-start-4 row-start-2";
      case 5:
        return "col-span-3 col-start-1 row-start-2";
      default:
        return "col-span-1";
    }
  };

  return (
    <div className="container mx-auto">
      <SectionTitle
        title="Jobs by Location"
        subTitle="Find your favourite jobs and get the benefits of yourself"
      />

      <div className="grid grid-cols-6 grid-rows-2 gap-4">
        {jobData.map((location, index) => (
          <div
            key={index}
            className={`border p-4 rounded-lg shadow-md bg-white ${getGridClasses(
              index
            )}`}
          >
            <h3 className="text-xl font-semibold">{location.country}</h3>
            <p className="mt-2 text-gray-600">{location.description}</p>
            {location.vacancies > 0 ? (
              <p className="mt-4 text-gray-500">
                Vacancies available: {location.vacancies}
              </p>
            ) : (
              <p className="mt-4 text-gray-500">No current vacancies.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobLocation;
