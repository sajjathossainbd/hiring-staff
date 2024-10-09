import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { CiBadgeDollar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import SimilarJobs from "../../components/jobs/SimilarJobs";
function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);
  // const {
  //   recruitersListing: recruiters,
  //   isLoading: isLoadingRecruiters,
  //   isError: isErrorRecruiters,
  //   error: errorRecruiters,
  // } = useSelector((state) => state.recruitersListing);

  const {
    description = [],
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
  // useEffect(() => {
  //   dispatch(fetchRecruitersListing());
  // }, [dispatch]);

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
        <div className="flex gap-16">
          <div className="md:w-2/3">
            <div className="flex justify-between">
              <div>
                <h4 className="mb-5">UI/UX Designer</h4>
                <div className="flex items-center gap-2">
                  <img
                    src="https://jobpilot.templatecookie.com/dummy-data/images/companies/company-logo-01.jpg"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-x-2">
                      <span className="text-blue font-medium">
                        Company Name
                      </span>
                      <GoDotFill className="text-[8px] text-gray" />
                      <div className="flex items-center gap-x-1">
                        <CiLocationOn />
                        <span>Dhaka , Bangladesh</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                        Fulltime
                      </span>
                      <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                        Remote
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-2">
                <button className="btn btn-primary bg-blue px-6 min-h-[2.8rem] h-[2.8rem] rounded-xl">
                  Apply Now
                </button>
                <button className="btn btn-primary btn-outline min-h-[2.8rem] h-[2.8rem] px-3 border-bgDeepBlue text-blue rounded-xl text-lg">
                  <FaBookmark />
                </button>
              </div>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">About this role</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cumque amet ipsa sapiente corporis dolore illum soluta! Ipsa
                tempore quibusdam maiores nesciunt, omnis dolore consectetur vel
                ipsum deleniti, nisi sequi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur cumque amet ipsa sapiente
                corporis dolore illum soluta! Ipsa tempore quibusdam maiores
                nesciunt, omnis dolore consectetur vel ipsum deleniti, nisi
                sequi.
              </p>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Requirement</h5>
              <ul>
                <li className="flex items-center gap-x-1">
                  <GoDotFill className="text-[10px] text-gray" />
                  hello this israfil hossain milon
                </li>
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">Responsibility</h5>
              <ul>
                <li className="flex items-center gap-x-1">
                  <GoDotFill className="text-[10px] text-gray" />
                  hello this israfil hossain milon
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3">
            <h4 className="mb-4">Similar Jobs</h4>
            <SimilarJobs />
            <SimilarJobs />
            <SimilarJobs />
            <SimilarJobs />
          </div>
        </div>
      </>
    );
  }
  return <div className="container">{content}</div>;
}

export default JobDetails;
