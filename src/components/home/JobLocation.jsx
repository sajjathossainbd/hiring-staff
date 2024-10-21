import { Trans } from "react-i18next";
import SectionTitle from "../../components/shared/SectionTitle";

const JobLocation = () => {
  const jobData = [
    {
      country: "Germany",
      description: "No vacancies available.",
      vacancies: 6,
      companies: 50, // Number of companies
      img: "https://media.istockphoto.com/id/522961501/photo/picturesque-landscape-fenced-ranch-at-sunrise.jpg?s=612x612&w=0&k=20&c=Jn4ujmVfUNUCejnoE3QJ2n9tV6bhjiYtA706dtJemOY=",
    },
    {
      country: "France",
      description: "One opportunity available.",
      vacancies: 1,
      companies: 1, // Number of companies
      img: "https://t3.ftcdn.net/jpg/07/50/39/10/360_F_750391022_XP5faCuMLaKMNG4N8pLgKHxbF0MzG9s9.jpg",
    },
    {
      country: "Japan",
      description: "Two positions open.",
      vacancies: 2,
      companies: 2, // Number of companies
      img: "https://s44650.pcdn.co/wp-content/uploads/2024/05/Luxembourg-richest-country.jpg",
    },
    {
      country: "Canada",
      description: "One job opportunity available.",
      vacancies: 1,
      companies: 1, // Number of companies
      img: "https://cdn.pixabay.com/photo/2019/07/10/18/48/road-4329250_640.jpg",
    },
    {
      country: "UK",
      description: "Two job openings available.",
      vacancies: 2,
      companies: 2, // Number of companies
      img: "https://wallpapers.com/images/hd/country-pictures-1865k30x2vc38gyj.jpg",
    },
    {
      country: "Australia",
      description: "One position available.",
      vacancies: 1,
      companies: 1, // Number of companies
      img: "https://media.cntraveler.com/photos/65132db9145de174cad39294/3:2/w_2560%2Cc_limit/San%2520Marino_GettyImages-999227576.jpg",
    },
  ];

  const getGridProperties = (index) => {
    switch (index) {
      case 0:
        return {
          colSpan: "lg:col-span-3",
          colStart: "lg:col-start-1",
          rowStart: "lg:row-start-1",
        };
      case 1:
        return {
          colSpan: "lg:col-span-4",
          colStart: "lg:col-start-4",
          rowStart: "lg:row-start-1",
        };
      case 2:
        return {
          colSpan: "lg:col-span-5",
          colStart: "lg:col-start-8",
          rowStart: "lg:row-start-1",
        };
      case 3:
        return {
          colSpan: "lg:col-span-3",
          colStart: "lg:col-start-10",
          rowStart: "lg:row-start-2",
        };
      case 4:
        return {
          colSpan: "lg:col-span-4",
          colStart: "lg:col-start-6",
          rowStart: "lg:row-start-2",
        };
      case 5:
        return {
          colSpan: "lg:col-span-5",
          colStart: "lg:col-start-1",
          rowStart: "lg:row-start-2",
        };
      default:
        return {
          colSpan: "lg:col-span-3",
          colStart: "lg:col-start-1",
          rowStart: "lg:row-start-1",
        };
    }
  };

  return (
    <div className="container">
      <SectionTitle
        title={<Trans i18nKey={"jobsByLocation"}/>}
        subTitle={<Trans i18nKey={"jobsByLocationDescrip"}/>}

      />
      <div className="grid lg:grid-cols-12 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6 lg:pt-14 pt-10">
        {jobData.map((job, index) => {
          const { colSpan, colStart, rowStart } = getGridProperties(index);

          return (
            <div
              key={index}
              className={`${colSpan} ${colStart} ${rowStart} p-4 rounded-xl bg-white dark:bg-darkBlue border border-[#D2D4D7] hover:-translate-y-1 hover:shadow-sm hover:shadow-[#D2D4D7] transition-all duration-200 cursor-pointer`}
            >
              <img
                className="h-72 w-full object-cover rounded-lg"
                src={job.img}
                alt=""
              />
              <div className="pt-3">
                <h4 className="">{job.country}</h4>
                <div className="flex justify-between pt-2 ">
                  <p className="text-14">{job.companies} companies</p>
                  <p className="text-14">
                    {job.vacancies > 0 ? job.vacancies + " vacancies" : "None"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobLocation;
