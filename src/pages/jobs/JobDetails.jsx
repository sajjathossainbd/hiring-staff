import { ScrollRestoration, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { GoDotFill } from "react-icons/go";
import SimilarJobs from "../../components/jobs/SimilarJobs";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import ApplyJob from "../../components/jobs/ApplyJob";
import { CiLocationOn } from "react-icons/ci";
import PrimaryBtnBlue from "../../components/ui/PrimaryBtnBlue";
import { HiExternalLink } from "react-icons/hi";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import MiniBtn from "../../components/ui/MiniBtn";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";

function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);

  const { jobsListing: jobsData } = useSelector((state) => state.jobsListing);

  const jobs = jobsData.jobs || [];
  const category = job.category || "";

  // Filter jobs by category
  const filteredJobsByCategory = jobs.filter(
    (job) => job.category === category
  );

  const { recruiterDetails: recruiter } = useSelector(
    (state) => state.recruiterDetails
  );
  const {
    description,
    job_type,
    job_location,
    requirements = [],
    responsibilities = [],
    benefits = [],
    education,
    tags = [],
    jobTitle,
    recruiter_id: companyId,
    min_salary,
    max_salary,
    lastDateToApply,
    postedDate,
  } = job || {};
  const { name, logo, email } = recruiter || {};
  useEffect(() => {
    dispatch(fetchJobsListing());
    dispatch(fetchJobDetails(id));
    dispatch(fetchRecruiterDetails(companyId));
  }, [dispatch, id, companyId]);

  // data formate
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = formatDate(lastDateToApply);

  function formatDatePost(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDatePost = formatDatePost(postedDate);

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
            {/* job details header */}
            <div className="lg:flex justify-between">
              {/* job title and profile */}
              <div>
                <h3 className="mb-5">{jobTitle}</h3>

                {/* logo and name */}
                <div className="flex ">
                  <div className="flex flex-col lg:flex-row items-center gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        className="h-20 w-auto object-cover rounded-full"
                        src={logo}
                        alt={name}
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex lg:flex-row flex-col items-center gap-x-2">
                          <span className="text-blue font-medium">{name}</span>
                          <GoDotFill className="text-[8px] text-graylg:block hidden" />
                        </div>
                        <div className="flex lg:justify-start justify-center gap-2">
                          <div className="flex items-center gap-x-2 text-14">
                            <span className="flex items-center gap-4">
                              <MiniBtn
                                value={job_location}
                                icon={<CiLocationOn />}
                                style="bg-softGreen text-green"
                              />
                              <MiniBtn
                                value={job_type}
                                icon={<IoBriefcaseOutline />}
                                style="bg-softGreen text-orange"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* apply and other button */}
              <div>
                <div className="flex flex-col items-center lg:flex-row gap-x-2">
                  {/*modal for aplly job */}
                  <button onClick={handleOpen}>
                    <PrimaryBtnBlue
                      title={"Apply Now"}
                      icon={<HiExternalLink />}
                    />
                  </button>
                  {isOpen && (
                    <dialog
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="700"
                      id="my_modal_3"
                      className="modal"
                      open
                    >
                      <div className="modal-box max-w-xl mt-7">
                        <form method="dialog">
                          <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleClose}
                          >
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">{jobTitle}</h3>
                        <ApplyJob job={job} onClose={handleClose} />
                      </div>
                    </dialog>
                  )}
                </div>
                <div className="mt-3">
                  <p className="lg:text-right text-16 font-medium">
                    <span className="font-bold">Posted Date: </span>
                    {formattedDatePost}
                  </p>
                  <p className="lg:text-right text-16 font-medium">
                    <span className="font-bold">Deadline Date: </span>
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>

            {/* job details informaton*/}
            <div className="mt-7">
              <h5 className="mb-2">About this role</h5>
              {description}
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Requirement</h5>
              <ul className="list-disc ml-10">
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Responsibility</h5>
              <ul className="list-disc ml-10">
                {responsibilities.map((responsibilitie, index) => (
                  <li key={index}>{responsibilitie}</li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Benefits</h5>
              <ul className="list-disc ml-10">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            {education && (
              <div className="mt-7">
                <h5 className="mb-2">Education</h5>
                <p className="flex items-center gap-x-1">
                  <GoDotFill className="text-[10px] text-gray" />
                  {education}
                </p>
              </div>
            )}
            <div className="mt-7">
              <h5 className="mb-2">Salary</h5>
              <p className="flex items-center gap-2">
                <TbCoinTaka className="text-xl" />
                {min_salary} - {max_salary} BDT
              </p>
            </div>
            <div className="bg-bgLightBlue dark:bg-darkBlue  p-8 rounded-md mt-10">
              <div className="text-14 flex gap-2">
                Tags :{" "}
                {tags.map((tag, index) => (
                  <span
                    className="bg-bgLightWhite px-2 py-1 rounded-sm"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-14">
                  Have a query? Drop us a line at{" "}
                  <span className="font-medium text-blue hover:border-b text-base">
                    {email}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col gap-5">
            <h4>Similar Job Opening ({filteredJobsByCategory.length || 0})</h4>
            {filteredJobsByCategory.map((job) => (
              <SimilarJobs key={job._id} job={job} />
            ))}
          </div>
        </div>
        <ScrollRestoration />
      </>
    );
  }
  return <div className="container">{content}</div>;
}

export default JobDetails;
