import { useState } from "react";
import { useEffect } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SectionTitle from "../shared/SectionTitle";

const JobDayCard = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "Content Writer",
    "Finance",
    "Human Resource",
    "Management",
    "Market Research",
    "Marketing & Sale",
    "Retail & Products",
    "Software",
  ];

  // SVG mapping for each category
  const categorySVGs = {
    "Content Writer":
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/content-writer.svg",
    Finance:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/finance.svg",
    "Human Resource":
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/customer-service.svg",
    Management:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/management.svg",
    "Market Research":
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/research.svg",
    "Marketing & Sale":
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/sale.svg",
    "Retail & Products":
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/retail.svg",
    Software:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/marketing.svg",
  };

  useEffect(() => {
    fetch("/jobCard.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        const defaultCategory = "Content Writer";
        setActiveCategory(defaultCategory);
        const filtered = data.filter((job) => job.category === defaultCategory);
        setFilteredJobs(filtered.slice(0, 8));
      });
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const filtered = jobs.filter((job) => job.category === category);
    setFilteredJobs(filtered.slice(0, 8));
  };

  return (
    <section className="container">
      <div className="">
        <SectionTitle
          title={"Jobs of the day"}
          subTitle={" Search and connect with the right candidates faster"}
        />

        <div className="flex flex-wrap gap-4 justify-center mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`bg-blue border border-lightGray rounded-lg  px-4 py-2 lg:px-6 lg:py-4 
                                    ${
                                      activeCategory === category
                                        ? "text-white  bg-[#F8FAFF] border-blue"
                                        : "bg-white text-blue border-[#B4C0E0]  px-4 py-2 lg:px-6 lg:py-4"
                                    }`}
              >
                <img
                  src={categorySVGs[category]}
                  alt={`${category} icon`}
                  className="inline-block w-6 h-6 mr-2"
                />
                {category}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF]"
              >
                <div className="card-body">
                  <h4 className="">{job.job_title}</h4>
                  <p className="card-title text-xs">
                    <IoBriefcaseOutline /> {job.job_type}
                    <div className="card-title text-xs">
                      <WiTime7 />
                      {job.job_post_time}
                    </div>
                  </p>
                  <p className="text-[14px]">{job.job_description}</p>
                  <div className="">
                    <div className="badge  rounded mr-3 p-2 bg-[#EFF3FC]">
                      App
                    </div>
                    <div className="badge  rounded p-2 bg-[#EFF3FC]">Figma</div>
                  </div>
                  <div className="card-actions ">
                    <button className="ml-auto btn text-12 bg-[#E0E6F7] hover:bg-blue hover:text-[white]">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDayCard;
