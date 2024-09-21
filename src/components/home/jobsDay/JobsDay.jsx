import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../shared/SectionTitle";
import JobCategoryButton from "./JobCategoryButton";
import JobCard from "../../shared/JobCard";

const JobsDay = () => {
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
    fetch("/jobsdata.json")
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
      <SectionTitle
        title={"Jobs of the day"}
        subTitle={" Search and connect with the right candidates faster"}
      />

      {/* Job Category Button */}
      <div className="flex flex-wrap gap-4 justify-center mt-14">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          {categories.map((categoryItem) => (
            <JobCategoryButton
              key={categoryItem}
              categoryItem={categoryItem}
              handleCategoryClick={handleCategoryClick}
              activeCategory={activeCategory}
              categorySVGs={categorySVGs}
            />
          ))}
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsDay;
