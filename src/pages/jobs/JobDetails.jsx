import { ScrollRestoration, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import SimilarJobs from "../../components/jobs/SimilarJobs";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);
  const { recruiterDetails: recruiter } = useSelector(
    (state) => state.recruiterDetails
  );

  const {
    description = [],
    job_type,
    job_location,
    postedDate,
    requirements = [],
    responsibilities = [],
    education,
    tags = [],
    jobTitle,
    company_email,
    min_salary,
    max_salary,
    lastDateToApply,
  } = job || {};

  const { name, logo, location = {} } = recruiter || {};
  useEffect(() => {
    dispatch(fetchJobDetails(id));
    dispatch(fetchRecruiterDetails(id));
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
        <div className="lg:flex gap-16 dark:text-white">
          <div className="lg:w-2/3 w-full">
            <div className="lg:flex justify-between">
              <div>
                <h3 className="mb-5">{jobTitle}</h3>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <img
                    className="h-20 w-auto object-cover rounded-full"
                    src={logo}
                    alt={name}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex lg:flex-row flex-col items-center gap-x-2">
                      <span className="text-blue font-medium">{name}</span>
                      <GoDotFill className="text-[8px] text-graylg:block hidden" />
                      <div className="flex items-center gap-x-1">
                        <CiLocationOn />
                        <span>
                          {location.city} , {location.country}
                        </span>
                      </div>
                    </div>
                    <div className="flex lg:justify-start justify-center gap-2 mt-1">
                      <span className="px-2 py-1 dark:bg-blue bg-bgLightWhite text-14 font-medium rounded-md">
                        {job_type}
                      </span>
                      <span className="px-2 py-1 dark:bg-blue bg-bgLightWhite text-14 font-medium rounded-md">
                        {job_location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center lg:flex-row gap-x-2">
                  <button className="btn btn-primary bg-blue text-white font-medium px-6 min-h-[2.8rem] h-[2.8rem] rounded-xl my-3">
                    Apply Now
                  </button>
                  <button className="btn btn-primary btn-outline min-h-[2.8rem] h-[2.8rem] px-3 border-bgDeepBlue text-blue dark:text-white rounded-xl text-lg">
                    <FaBookmark />
                  </button>
                </div>
                <div className="mt-3">
                  <p className="lg:text-right text-14 font-medium">
                    <span className="font-bold">Posted Date :</span>{" "}
                    {postedDate}
                  </p>
                  <p className="lg:text-right text-14 font-medium">
                    <span className="font-bold">Deadline :</span>{" "}
                    {lastDateToApply}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">About this role</h5>
              {description.map((descrip, index) => (
                <span key={index}>{descrip}</span>
              ))}
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Requirement</h5>
              <ul>
                {requirements.map((requirement, index) => (
                  <li className="flex items-center gap-x-1" key={index}>
                    <GoDotFill className="text-[10px] text-gray" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Responsibility</h5>
              <ul>
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-center gap-x-1">
                    <GoDotFill className="text-[10px] text-gray" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Education</h5>
              <p className="flex items-center gap-x-1">
                <GoDotFill className="text-[10px] text-gray" />
                {education}
              </p>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Salary</h5>
              <p className="flex items-center">
                <FiDollarSign className="text-lg text-gray dark:text-white" />
                {min_salary} -{" "}
                <FiDollarSign className="text-lg text-gray dark:text-white" />
                {max_salary}
              </p>
            </div>
            <div className="bg-bgLightBlue dark:bg-darkBlue  p-8 rounded-md mt-10">
              <div className="text-14 ">
                Tags :{" "}
                {tags.map((tag, index) => (
                  <p
                    className="px-2 bg-bgDeepBlue dark:bg-blue inline-block mr-2 lg:mb-0 mb-2 rounded-md"
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-14">
                  Have a query? Drop us a line at{" "}
                  <span className="font-medium text-blue hover:border-b text-base">
                    {company_email}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col gap-5">
            <h4 className="mb-4">Similar Jobs</h4>
            <SimilarJobs />
            <SimilarJobs />
            <SimilarJobs />
            <SimilarJobs />
          </div>
        </div>
        <ScrollRestoration />
      </>
    );
  }
  return <div className="container">{content}</div>;
}

export default JobDetails;
