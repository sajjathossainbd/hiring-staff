import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "./../../../components/ui/Loading";
import TinnyHeading from "../shared/TinnyHeading";

const ViewAllApplications = () => {
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

  const handleSelectChange = async (applicationId, action) => {
    let updateData;
    let statusText;

    if (action === "shortlist") {
      updateData = { shortlist: "approved", reject: false };
      statusText = "Shortlisted";
    } else if (action === "reject") {
      updateData = { reject: true, shortlist: "pending" };
      statusText = "Rejected";
    } else if (action === "pending") {
      updateData = { shortlist: "pending", reject: false };
      statusText = "Pending";
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

  if (isLoading) return <Loading />;

  return (
    <div>
      <TinnyHeading
        title={"Manage Jobs"}
        path={"manage-jobs"}
        pathName={"Manage Jobs"}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Shortlist</th>
              <th className="border border-gray-200 px-4 py-2">Rejections</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
              <th className="border border-gray-200 px-4 py-2">Applied Date</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((application) => (
              <tr key={application._id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  {application?.applicantName}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {application?.applicantEmail}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <p
                    className={
                      application?.shortlist == "approved"
                        ? "bg-lime-500"
                        : "bg-yellow-500"
                    }
                  >
                    {application?.shortlist == "approved"
                      ? "Shortlisted"
                      : "Pending"}
                  </p>
                </td>
                <td>
                  <p
                    className={
                      application.reject == false
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }
                  >
                    {application?.reject == false ? "Not rejected" : "Rejected"}
                  </p>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <select
                    onChange={(event) =>
                      handleSelectChange(application._id, event.target.value)
                    }
                    className="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white p-2 hover:bg-blue-100"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Actions
                    </option>
                    <option value="shortlist">Shortlist</option>
                    <option value="pending">Pending</option>
                    <option value="reject">Reject</option>
                  </select>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {application?.appliedDate
                    ? new Date(application.appliedDate).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllApplications;
