import { useState } from "react";
import { FaWarehouse } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import NoFoundData from "../../../components/ui/NoFoundData";
import { CardPagination } from "../../../components/shared/CardPagination";
import { useNavigate } from "react-router-dom";
import useCurrentCandidate from "../../../hooks/useCurrentCandidate";

const ShortlistedJobs = () => {

  const navigate = useNavigate();
  const { currentCandidate } = useCurrentCandidate();
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1); // State for current page
  const limit = 12; // Number of jobs per page

  const { data: shortlistAppliedJobs } = useQuery({
    queryKey: ["shortlistAppliedJobs", currentCandidate?.email, page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied-jobs/shortlist/approved/${currentCandidate?.email}?page=${page}&limit=${limit}`
      );
      return res.data;
    },
    enabled: !!currentCandidate?.email,
  });

  if (shortlistAppliedJobs?.jobs?.length === 0 || shortlistAppliedJobs === undefined) {
    return (
      <>
        <TinnyHeading
          title="Shortlisted Resumes"
          path="shortlist"
          pathName="Shortlisted Resumes"
        />
        <NoFoundData title="No Shortlist Jobs Found!" />
      </>
    );
  }

  const totalPages = shortlistAppliedJobs.totalPages || 1; // Get total pages from response

  return (
    <div>
      <TinnyHeading
        title={"Shortlisted Jobs"}
        path={"shortlisted-jobs"}
        pathName={"Shortlisted Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-6 mb-5">
        {shortlistAppliedJobs?.jobs?.map((job, idx) => (
          <div
            key={idx}
            className="shadow-md bg-bgLightBlue hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto cursor-pointer"
          >
            <div>
              <div className="flex items-center">
                <div className="ml-3">
                  <h5 className="">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 flex-wrap ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.company_email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-12">
                  Applied on:
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    {job?.appliedDate}
                  </span>
                </p>
              </div>

              <div className="flex space-x-4 text-gray">
                <p className="text-12 bg-yellow-300 px-2 py-1 rounded-lg">
                  {job.shortlist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <CardPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => navigate(`/dashboard/shortlisted-jobs/${newPage}`)}
      />
    </div>
  );
};

export default ShortlistedJobs;
