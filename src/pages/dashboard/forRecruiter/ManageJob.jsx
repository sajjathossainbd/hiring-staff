import TinnyHeading from "../shared/TinnyHeading";
import { FaRegEye } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCurrentUser from "../../../hooks/useCurrentUser";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import JobPostCard from "./JobPostCard";
import findCadidate from "./../../../../public/find2.json";

const ManageJob = () => {
  const { currentRecruiter } = useCurrentUser();

  const { data: myJobs, refetch } = useQuery({
    queryKey: ["myJobs", currentRecruiter?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/email/${currentRecruiter.email}`
      );
      return res.data;
    },
    enabled: !!currentRecruiter?.email,
  });
  console.log(myJobs);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/jobs/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Job has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <TinnyHeading
        title={"Manage Jobs"}
        path={"manage-jobs"}
        pathName={"Manage Jobs"}
      />
      {/* Create A New Job Post */}
      <div className="flex justify-end">
        <button>
          <PrimaryBtnBlue icon={<GoPlus />} title="Create A Job Post" />
        </button>
      </div>
      {/* <JobPostCard
          Cardtitle="We're Hiring"
          jobTitle="Fresher React Developer"
          statusTitle="Applied"
          img={findCadidate}
          style="gradient-4"
          link="/dashboard/job-appliers"
        /> */}
      {/* All Job Post */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {myJobs?.map((job) => (
          <>
            <JobPostCard
              Cardtitle="We're Hiring"
              jobTitle={job?.jobTitle}
              statusTitle="Applied "
              img={findCadidate}
              style="gradient-4"
              link={`/dashboard/job-appliers/${job?._id}`}
              job={job}
            />
          </>
        ))}
      </div>

      {/* Manage JObs */}
      <div className="mt-10">
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
                      {job?.postedDate} ={">"} {job?.lastDateToApply}
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
                        <button
                          onClick={() => handleDelete(job?._id)}
                          className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                        >
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
                            <span className="text-xs text-yellow-500 bg-green p-3 rounded-full ml-3">
                              {job?.applicationsCount}
                            </span>
                          </div>
                          <div className="text-14 flex gap-1 items-center">
                            <CiMail className="text-lg" />
                            {job?.company_email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {job?.postedDate} ={">"} {job?.lastDateToApply}
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/applications/${job?._id}`}
                        className="btn btn-primary"
                      >
                        View All
                      </Link>
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
                        <button
                          onClick={() => handleDelete(job?._id)}
                          className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                        >
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
    </div>
  );
};

export default ManageJob;
