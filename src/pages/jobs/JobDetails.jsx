import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { CiBadgeDollar } from "react-icons/ci";
function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);
  const {
    description,
    job_type,
    job_location,
    postedDate,
    requirements,
    responsibilities,
    education,
    tags,
    jobTitle,
    company_email,
    min_salary,
    max_salary,
    lastDateToApply,
  } = job || {};

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !job?._id) {
    content = <NoFoundData title={"No Job Found!"} />;
  }

  if (!isLoading && !isError && job?._id) {
    content = (
      <>
        <div className="container">
          {content}

          {/* update dynamic date */}
          <div>
            {/* <img
              className="lg:h-[400px] rounded-3xl object-cover w-full mb-10 overflow-hidden"
              src={image}
              alt={position}
            /> */}
            <div className="flex lg:flex-row flex-col gap-10 dark:text-white">
              <div className="lg:w-8/12 w-full">
                <h3 className="pt-4 pb-2">{jobTitle}</h3>
                <div className="flex gap-16 text-sm">
                  <p>Type: {job_type}</p>
                  <p>Posted: {postedDate}</p>
                </div>
                <hr className="border-0 h-px bg-lightGray mt-3 mb-12" />
                {/* <h4 className="pt-4 pb-2">{`Welcome to the ${company}`}</h4> */}
                {description.map((des, index) => {
                  return <span key={index}>{des}</span>;
                })}
                <h4 className="pt-4 pb-2">Ideal Candidate Profile</h4>
                <ul>
                  {requirements.map((req, index) => {
                    return <li key={index}>{req}</li>;
                  })}
                </ul>
                <h4 className="pt-4 pb-2">Key Responsibilities</h4>
                <ul>
                  {responsibilities.map((respon, index) => {
                    return <li key={index}>{respon}</li>;
                  })}
                </ul>
                <h4 className="pt-4 pb-2">Salary</h4>
                <p className="flex gap-x-1 items-center">
                  <CiBadgeDollar /> ${min_salary} - {max_salary}
                </p>
                <h4 className="pt-4 pb-2">Last Date To Apply</h4>
                <p>{lastDateToApply}</p>
                <h4 className="pt-4 pb-2">Job Location</h4>
                <p>{job_location}</p>
                <h4 className="pt-4 pb-2">Key Education</h4>
                <p>{education}</p>
                <h4 className="pt-4 pb-2">Contact Us</h4>
                <p>
                  Contact Us For any Query{" "}
                  <span className="text-blue hover:border-b">
                    {company_email}
                  </span>
                </p>
                <p className="mt-10">
                  Join us in shaping the future of digital design and enhancing
                  user experiences at Jthemes!
                </p>
                <div className="mt-4 md:flex gap-x-2">
                  Tags:{" "}
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge p-4 badge-neutral badge-outline md:m-0 m-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-4/12 flex flex-col gap-10 w-full">
                {/* Similar Jobs */}
                <div className="border border-lightGray p-6 rounded-xl">
                  <h4 className="pb-7">Similar Jobs</h4>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <>{content}</>;
}

export default JobDetails;
