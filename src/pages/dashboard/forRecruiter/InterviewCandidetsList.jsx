import { useParams } from "react-router-dom";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import TinnyHeading from "../shared/TinnyHeading";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AssignInvitation from "../../../components/dashboard/AssignInvitation";
import InvitationAnswer from "../../../components/dashboard/InvitationAnswer";

function InterviewCandidetsList() {
  const { jobId } = useParams();

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenInvite = (job) => {
    setSelectedJob(job);
    setIsInviteModalOpen(true);
  };

  const handleOpenAnswer = (job) => {
    setSelectedJob(job);
    setIsResultModalOpen(true);
  };

  const handleCloseModals = () => {
    setSelectedJob(null);
    setIsInviteModalOpen(false);
    setIsResultModalOpen(false);
  };

  const {
    data: applications,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["applications", jobId],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied/applications/${jobId}`
      );
      return res.data;
    },
    enabled: !!jobId,
  });

  const Intrviewed = applications?.filter(
    (applicant) => applicant?.interview === true
  );
  console.log(Intrviewed);
  return (
    <div>
      <TinnyHeading
        title="Manage Interview Candidates"
        path="interview-candidates-list"
        pathName="Interview Candidates List"
      />

      <div className="p-6 bg-gray-50">
        {/* All Candidates List */}
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-4">
            {/* head */}
            <thead>
              <tr className="bg-white text-16 rounded-sm">
                <th className="rounded-l-md">Name</th>
                <th>Date</th>
                <th>Interview</th>
                {/* <th>Answer</th>
                <th className="rounded-r-md">Status</th> */}
              </tr>
            </thead>
            <tbody>
              {Intrviewed?.map((job) => (
                <tr
                  key={job._id}
                  className="light:bg-white rounded-md shadow-sm"
                >
                  <td className="rounded-l-md">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src= {job?.applicantImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job?.applicantName}</div>
                        <div className="text-sm opacity-50">{job?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{new Date(job?.appliedDate).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleOpenInvite(job)}>
                      <PrimaryBtnBlue title={"Invite"} />
                    </button>
                  </td>
                  {/* <td>
                    <button onClick={() => handleOpenAnswer(job)}>
                      {" "}
                      <PrimaryBtnBlue title={"Answers"} />
                    </button>
                  </td> */}
                  {/* <td>
                    <select className="select dark:bg-darkBlue select-bordered w-full">
                      <option value="applied">Interivew</option>
                      <option value="shortlist">Selected</option>
                    </select>
                  </td> */}

                  {/* Modal for  Invitetion */}
                  {isInviteModalOpen && selectedJob && (
                    <dialog
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="700"
                      id="assign_assessment_modal"
                      className="modal"
                      open
                    >
                      <div className="modal-box max-w-xl mt-7">
                        <form method="dialog">
                          <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleCloseModals}
                          >
                            ✕
                          </button>
                        </form>

                        <AssignInvitation
                          job={selectedJob}
                          onClose={handleCloseModals}
                        />
                      </div>
                    </dialog>
                  )}

                  {/* Modal for Answer */}
                  {isResultModalOpen && selectedJob && (
                    <dialog
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="700"
                      id="assign_assessment_modal"
                      className="modal"
                      open
                    >
                      <div className="modal-box max-w-xl mt-7">
                        <form method="dialog">
                          <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleCloseModals}
                          >
                            ✕
                          </button>
                        </form>
                        <div>{/* details */}</div>
                        <InvitationAnswer
                          job={selectedJob}
                          onClose={handleCloseModals}
                        />
                      </div>
                    </dialog>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InterviewCandidetsList;
