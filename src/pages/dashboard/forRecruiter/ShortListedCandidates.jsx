import { useQuery } from "@tanstack/react-query";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import TinnyHeading from "../shared/TinnyHeading";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import Swal from "sweetalert2";

function ShortListedCandidates({ job }) {
  const { jobId } = useParams();

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

  const handleSelectChange = async (applicationId, action) => {
    let updateData;
    let statusText;

    if (action === "shortlist") {
      updateData = { shortlist: "approved", reject: false };
      statusText = "Shortlisted";
    } else if (action === "interview") {
      updateData = { shortlist: "interview", reject: false };
      statusText = "Interview";
    }

    try {
      const res = await axiosInstance.patch(
        `/jobs/applied-jobs/update/${applicationId}`,
        updateData
      );

      if (res.data.updatedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `This application is now ${statusText}.`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <div>
      <TinnyHeading
        title="Manage Shortlisted Candidates"
        path="shortlsit-candidates"
        pathName="Shortlisted Candidates List"
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
                <th>Assessments</th>
                <th className="rounded-r-md">Status</th>
              </tr>
            </thead>
            <tbody>
              {shortlisted?.map((job) => (
                <tr className="bg-white rounded-md shadow-sm">
                  <td className="rounded-l-md">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Jane Doe</div>
                        <div className="text-sm opacity-50">
                          3 years experience
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>26 October, 2024</td>
                  <td>
                    <button>
                      <PrimaryBtnBlue title={"Assign Assessments"} />
                    </button>
                  </td>
                  <td>
                    <select
                      onChange={(event) =>
                        handleSelectChange(job?._id, event.target.value)
                      }
                      value={job?.shortlist}
                      className="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white p-2 hover:bg-blue-100 cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Actions
                      </option>
                      <option value="shortlist">Shortlist</option>
                      <option value="interview">Interview</option>
                    </select>
                  </td>
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
