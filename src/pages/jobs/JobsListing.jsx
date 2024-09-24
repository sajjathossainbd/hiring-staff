import { Link } from "react-router-dom";
import BlogSection from "../../components/home/BlogSection";
import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import SearchByFilter from "../../components/shared/SearchByFilter";
import { useEffect, useState } from "react";
import axios from "axios";

function JobsListing() {

  const [jobs, setJobs] = useState([])



  // Fetch jobs
  useEffect(() => {
    axios.get("http://localhost:5000/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);




  return (
    <>
      <div className="container">
        <div className="lg:py-16 lg:px-0 px-3 py-10 bg-bgLightWhite dark:bg-darkBlue flex flex-col items-center rounded-3xl">
          <div className="text-center pb-6">
            <h3>
              <span className="text-blue">22 Jobs</span> Available Now
            </h3>
            <p className="max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, atque delectus molestias quis
            </p>
          </div>
          {/* search filter */}
          <SearchByFilter />
        </div>
        <div className="pb-10 mt-20">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
            {jobs.map((job, index) => (
              <Link key={index} to={`/job-details/${job.id}}`}>
                {" "}
                <JobCard
                  job_title={job.position}
                  job_type={job.type}
                  job_post_time={job.posted}
                  job_description={job.description}
                />
              </Link>
            ))}
          </div>
        </div>
        {/* pagination */}
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
      {/* news and blogs */}
      <BlogSection />
      <NewsLetter />
    </>
  );
}

export default JobsListing;
