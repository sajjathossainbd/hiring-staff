/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import RecruiterJobsCard from "./RecruiterJobsCard";

const OpenPosition = forwardRef(
  ({ openJobs, recruiterImg, recruiterName }, ref) => {
    return (
      <div ref={ref}>
        <div>
          <h4 className="mb-10">Open Positions ({openJobs?.length || 0})</h4>
        </div>
        {/* Open position list */}
        <div className="flex flex-col gap-6">
          {openJobs?.length > 0 ? (
            openJobs.map((job, index) => (
              <RecruiterJobsCard
                key={index}
                recruiterimg={recruiterImg}
                recruiterName={recruiterName}
                position={job.jobTitle || "No Position"}
                jobType={job.job_type || "No Available"}
                locations={job.job_location || "No Location"}
                max_salary={job.max_salary || "No Salary"}
                min_salary={job.min_salary || "No Salary"}
                dates={job.postedDate || "Unknown Date"}
                _id={job._id}
              />
            ))
          ) : (
            <p>No open positions available</p>
          )}
        </div>
      </div>
    );
  }
);

export default OpenPosition;
