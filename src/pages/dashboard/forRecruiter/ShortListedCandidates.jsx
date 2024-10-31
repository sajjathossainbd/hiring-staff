import { useQuery } from "@tanstack/react-query";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import TinnyHeading from "../shared/TinnyHeading";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useState } from "react";
import AssignAssessments from "../../../components/dashboard/AssignAssessments";
import AssessmentResult from "../../../components/dashboard/AssessmentResult";
import { toast } from "react-hot-toast";

function ShortListedCandidates() {
  const { jobId } = useParams();
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenAssignModal = (job) => {
    setSelectedJob(job);
    setIsAssignModalOpen(true);
  };

  const handleOpenResultModal = (job) => {
    setSelectedJob(job);
    setIsResultModalOpen(true);
  };

  const handleCloseModals = () => {
    setSelectedJob(null);
    setIsAssignModalOpen(false);
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

  const shortlisted = applications?.filter(
    (applicant) => applicant?.shortlist === "approved"
  );

  const handleToggleInterview = async (job) => {
    try {
      const response = await axiosInstance.patch(
        `/jobs/applied-jobs/interview/${job._id}`
      );

      if (response.status === 200) {
        refetch(); // Refresh data
        toast.success("Interview status updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update interview status. Please try again.");
      console.error("Error updating interview status:", error);
    }
  };

  const handleReject = async (job) => {
    try {
      const response = await axiosInstance.patch(
        `/jobs/applied-jobs/interview/${job._id}`,
        {
          interview: false,
        }
      );

      if (response.status === 200) {
        refetch();
        toast.success("Job application rejected successfully!");
      }
    } catch (error) {
      toast.error("Failed to reject job application. Please try again.");
      console.error("Error rejecting job application:", error);
    }
  };

  return (
    <div>
      <TinnyHeading
        title="Manage Shortlisted Candidates"
        path="shortlisted-candidates"
        pathName="Shortlisted Candidates List"
      />

      <div className="p-6 bg-gray-50">
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-white text-16 rounded-sm">
                <th className="rounded-l-md">Name</th>
                <th>Date</th>
                <th>Assessments</th>
                <th>Assessment Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shortlisted?.map((job) => (
                <tr key={job._id} className="bg-white rounded-md shadow-sm">
                  <td className="rounded-l-md">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.applicantName}</div>
                        <div className="text-sm opacity-50">
                          {job.applicantEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleOpenAssignModal(job)}>
                      <PrimaryBtnBlue title={"Assign"} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleOpenResultModal(job)}>
                      <PrimaryBtnBlue title={"Show Result"} />
                    </button>
                  </td>
                  <td>
                    {job.interview ? (
                      <button
                        onClick={() => handleReject(job)}
                        className="btn btn-error"
                      >
                        Reject
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggleInterview(job)}
                        className="btn btn-outline border-blue hover:bg-lightBlue hover:border-none "
                      >
                        Interview
                      </button>
                    )}
                  </td>

                  {/* Modal for Assign Assessments */}
                  {isAssignModalOpen && selectedJob && (
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

                        <AssignAssessments
                          job={selectedJob}
                          onClose={handleCloseModals}
                        />
                      </div>
                    </dialog>
                  )}

                  {/* Modal for Assessment Result */}
                  {isResultModalOpen && selectedJob && (
                    <dialog
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="700"
                      id="assessment_result_modal"
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

                        <AssessmentResult
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

export default ShortListedCandidates;
