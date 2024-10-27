import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import TinnyHeading from "../shared/TinnyHeading";
import { FaRegEye, FaWarehouse } from "react-icons/fa";
import NoFoundData from "../../../components/ui/NoFoundData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardPagination } from "../../../components/shared/CardPagination";
import useCurrentUser from "../../../hooks/useCurrentUser";

const SelectedJobs = () => {

  const { currentCandidate } = useCurrentUser();

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data: selectedJobsData } = useQuery({
    queryKey: ["selectedJobsData", currentCandidate?.email, page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied-jobs/selected/${currentCandidate?.email}?page=${page}&limit=${limit}`
      );
      return res.data;
    },
    enabled: !!currentCandidate?.email,
  });

  if (!selectedJobsData || selectedJobsData.selectedJobs.length === 0) {
    return (
      <>
        <TinnyHeading
          title={"Selected Jobs"}
          path={"selected-jobs"}
          pathName={"Selected Jobs"}
        />
        <NoFoundData title="No Selected Jobs Found!" />
      </>
    );
  }

  const { selectedJobs, totalPages } = selectedJobsData;

  return (
    <div>
      <TinnyHeading
        title={"Selected Jobs"}
        path={"selected-jobs"}
        pathName={"Selected Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6">
        {selectedJobs?.map((job, idx) => (
          <div
            key={idx}
            className="shadow-md bg-white hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto "
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="ml-3">
                  <h5>{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 flex-wrap ">
                      <FaWarehouse className="mr-1 text-lightBlue" />
                      {job.company_email}
                    </span>
                  </div>
                </div>
                <Link to={`/job-details/${job?.jobId}`}>
                  <button className=" rounded-full text-blue hover:text-white hover:bg-blue">
                    <FaRegEye />
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-12">
                  Applied on:
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    {job.appliedDate}
                  </span>
                </p>
              </div>

              <div className="flex space-x-4 text-gray">
                <p className="text-12 bg-green text-white px-2 py-1 rounded-lg">
                  {job.shortlist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CardPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) =>
          navigate(`/dashboard/selected-jobs/${newPage}`)
        }
      />
    </div>
  );
};

export default SelectedJobs;
