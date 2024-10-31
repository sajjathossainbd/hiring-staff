import { useState } from "react";
import TinnyHeading from "../shared/TinnyHeading";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import NoFoundData from "../../../components/ui/NoFoundData";
import { CardPagination } from "../../../components/shared/CardPagination";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import { VscEye } from "react-icons/vsc";
import SubmitAssessment from "../../../components/dashboard/SubmitAssessment";

const ShortlistedJobs = () => {
  const { currentCandidate } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const handleOpenInterview = (job) => {
    setSelectedJob(job);
    setIsInterviewOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsInterviewOpen(false);
    setSelectedJob(null);
  };

  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 12;

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
              className="shadow-md light:bg-white hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto dark:border dark:border-white"
            >
              <div className="flex gap-8 items-center mb-4">
                <div className="bg-bgLightWhite p-3 text-blue rounded-md text-2xl inline-block">
                  <IoBriefcaseOutline />
                </div>
                <button className="bg-bgLightWhite text-blue font-medium rounded-full text-14 px-6 py-1 pb-2">
                  {"Shortlisted"}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="">
                  <h5 className="text-lg font-semibold mb-2">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-16 text-gray">
                    <span className="flex items-center gap-2">
                      <MdOutlineMailOutline />
                      {job.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-14">
                    Applied Date:
                    <span className="bg-green-100 text-green-500 rounded-full ml-2">
                      {appliedDate}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <button onClick={() => handleOpen(job)}>
                  <PrimaryBtnBlue icon={<VscEye />} title={"Assignment"} />
                </button>
                {job.schedule && job.schedule.length > 0 ? (
                  <button onClick={() => handleOpenInterview(job)}>
                    <PrimaryBtnBlue title={"Interview"} />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Submit Assessment */}
      {isOpen && selectedJob && (
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
            <h3 className="font-bold text-lg">{selectedJob.jobTitle}</h3>
            <SubmitAssessment job={selectedJob} onClose={handleClose} />
          </div>
        </dialog>
      )}

      {/* Modal for Interview */}
      {isInterviewOpen && selectedJob && (
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

            {/* Displaying Job Details and Interview Schedule */}
            <h3 className="font-bold text-lg">{selectedJob.jobTitle}</h3>
            <p>Email: {selectedJob.email}</p>

            {/* Displaying the interview schedule */}
            {selectedJob.schedule && selectedJob.schedule.length > 0 ? (
              <>
                <h4 className="mt-4 text-md font-semibold">Scheduled Interviews:</h4>
                {selectedJob.schedule.map((interview, index) => (
                  <div key={index} className="border-b py-2">
                    <p><strong>Date:</strong> {new Date(interview.interviewDate).toLocaleDateString("en-GB")}</p>
                    <p><strong>Time:</strong> {interview.interviewTime}</p>
                    <p><strong>Message:</strong> {interview.message}</p>
                    {/* Optionally display when it was scheduled */}
                    {/* Uncomment if you want to show when it was scheduled */}
                    {/*<p><strong>Scheduled At:</strong> {new Date(interview.scheduledAt).toLocaleString()}</p>*/}
                  </div>
                ))}
              </>
            ) : (
              <p>No interviews scheduled.</p>
            )}
          </div>
        </dialog>
      )}

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