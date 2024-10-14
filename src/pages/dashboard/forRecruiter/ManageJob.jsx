import TinnyHeading from "../shared/TinnyHeading";
import { FaArrowRight, FaRegEye } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { Link } from "react-router-dom";
const ManageJob = () => {

  const { currentUser } = useCurrentUser();

  const { data: myJobs } = useQuery({
    queryKey: ["myJobs", currentUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/jobs/email/${currentUser.email}`);
      return res.data;
    },
    enabled: !!currentUser?.email,
  });



  return (
    <div>
      <TinnyHeading
        title={"Manage Jobs"}
        path={"manage-jobs"}
        pathName={"Manage Jobs"}
      />
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
        <h5>Manage Jobs</h5>
        <hr className="my-6 text-lightGray" />
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table text-sm">
            {/* head */}
            <thead>
              <tr className="text-base dark:text-white">
                <th>Title</th>
                <th>Applications</th>
                <th>Created & Expired</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myJobs?.map((job, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold mb-2 lg:text-base text-sm">
                          {job?.jobTitle}
                        </div>
                        <div className="text-14 flex gap-1 items-center">
                          <CiMail className="text-lg" />
                          {job?.company_email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-blue">{job?.appliedCount}</span>
                  </td>
                  <td>
                    {job?.postedDate} <FaArrowRight /> {job?.lastDateToApply}
                  </td>
                  <td>
                    <div className="tooltip" data-tip="View">

                      <Link to={`/job-details/${job?._id}`}>
                        <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                          <FaRegEye />
                        </button>
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="tooltip" data-tip="Delete">
                      <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJob;
