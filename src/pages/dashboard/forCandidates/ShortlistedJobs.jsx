import { useState } from "react";
import { FaWarehouse } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import NoFoundData from "../../../components/ui/NoFoundData";
import { CardPagination } from "../../../components/shared/CardPagination";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import { VscEye } from "react-icons/vsc";
import { AiOutlineUserDelete } from "react-icons/ai";

const ShortlistedJobs = () => {
  const { currentCandidate } = useCurrentUser();

  const navigate = useNavigate();
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

  if (
    shortlistAppliedJobs?.jobs?.length === 0 ||
    shortlistAppliedJobs === undefined
  ) {
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

  const totalPages = shortlistAppliedJobs.totalPages || 1;

  return (
    <div>
      <TinnyHeading
        title={"Shortlisted Jobs"}
        path={"shortlisted-jobs"}
        pathName={"Shortlisted Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 mb-5">
        {shortlistAppliedJobs?.jobs?.map((job, idx) => {
          const appliedDate = new Date(job.appliedDate).toLocaleDateString(
            "en-GB",
            {
              timeZone: "Asia/Dhaka",
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          );
          return (
            <div
              key={idx}
              className="shadow-md bg-white hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto "
            >
              {/* Icon and status button */}
              <div className="flex gap-8 items-center mb-4">
                <div className="bg-bgLightWhite p-3 text-blue rounded-md text-2xl inline-block">
                  <IoBriefcaseOutline />
                </div>
                <button className="bg-bgLightWhite text-blue font-medium rounded-full text-14 px-6 py-1 pb-2">
                  {job?.shortlist}
                </button>
              </div>

              {/* Job title, company name, and view details */}
              <div className="flex items-center justify-between">
                <div className="">
                  <h5 className="text-lg font-semibold mb-2">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-16 text-gray">
                    <span className="flex items-center gap-2">
                      <MdOutlineMailOutline />
                      {job.company_email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Applied date*/}
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-14">
                    Applied Date:
                    <span className="bg-green-100 text-green-500  rounded-full ml-2">
                      {appliedDate}
                    </span>
                  </p>
                </div>
              </div>

              {/* View Details Job & Delete Action */}
              <div className="flex items-center gap-6 mt-6">
                <Link to={`/job-details/${job?.jobId}`}>
                  <button className="">
                    <PrimaryBtnBlue
                      icon={<VscEye />}
                      title={"See Details Job Post"}
                    />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Component */}
      <CardPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) =>
          navigate(`/dashboard/shortlisted-jobs/${newPage}`)
        }
      />
    </div>
  );
};

export default ShortlistedJobs;
