import RecruiterJobsCard from "./RecruiterJobsCard";
import { fetchAllRecruiters } from "../../features/recruiters/allRecruiters/allRecruitersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RecruiterDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { recruiters, isLoading, isError, error } = useSelector(
    (state) => state.recruiters
  );

  useEffect(() => {
    dispatch(fetchAllRecruiters());
  }, [dispatch]);

  const recruiterData = recruiters?.find((item) => item._id === id);

  if (!isLoading && !recruiterData) {
    return <div>Recruiter not found</div>;
  }

  const { brandName, brandImage, companyMotive, openJobs } =
    recruiterData || {};

  return (
    <div className="container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="text-center pb-10">
            <h4 className="flex items-center justify-center gap-2">
              <img className="h-5 w-auto" src={brandImage} alt="" />
              {brandName} offers career opportunities.
            </h4>
            <p className="py-1 mt-1 px-5 rounded-3xl bg-bgLightBlue dark:bg-blue dark:text-white inline-block">
              {companyMotive}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <RecruiterJobsCard
              recruiterImage={
                "https://jobpilot.templatecookie.com/dummy-data/images/companies/company-logo-12.png"
              }
              position={"Frontend Developer"}
              jobType={"Full Time"}
              locations={"Dhaka, Bangladesh"}
              salary={"1000 - 4000"}
              dates={"10/30/40"}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default RecruiterDetails;
