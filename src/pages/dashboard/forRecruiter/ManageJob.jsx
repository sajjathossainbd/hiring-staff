import TinnyHeading from "../shared/TinnyHeading";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
const ManageJob = () => {
  const jobListings = [
    {
      jobTitle: "Product Designer",
      address: "32, Wales Street, New York, USA",
      appliedCount: "5+ Applied",
      startDate: "November 27, 2020",
      endDate: "December 25, 2024",
      status: "Active",
    },
    {
      jobTitle: "Software Engineer",
      address: "45, Ocean Avenue, San Francisco, USA",
      appliedCount: "10+ Applied",
      startDate: "January 15, 2021",
      endDate: "February 20, 2024",
      status: "Active",
    },
    {
      jobTitle: "UX/UI Designer",
      address: "15, Park Lane, Chicago, USA",
      appliedCount: "3+ Applied",
      startDate: "March 01, 2022",
      endDate: "December 10, 2024",
      status: "Active",
    },
    {
      jobTitle: "Data Scientist",
      address: "89, Elm Street, Boston, USA",
      appliedCount: "8+ Applied",
      startDate: "April 18, 2021",
      endDate: "November 30, 2024",
      status: "Active",
    },
    {
      jobTitle: "Frontend Developer",
      address: "67, Maple Street, Austin, USA",
      appliedCount: "15+ Applied",
      startDate: "June 10, 2021",
      endDate: "October 15, 2024",
      status: "Active",
    },
    {
      jobTitle: "Software Engineer",
      address: "45, Ocean Avenue, San Francisco, USA",
      appliedCount: "10+ Applied",
      startDate: "January 15, 2021",
      endDate: "February 20, 2024",
      status: "Active",
    },
    {
      jobTitle: "UX/UI Designer",
      address: "15, Park Lane, Chicago, USA",
      appliedCount: "3+ Applied",
      startDate: "March 01, 2022",
      endDate: "December 10, 2024",
      status: "Active",
    },
    {
      jobTitle: "Data Scientist",
      address: "89, Elm Street, Boston, USA",
      appliedCount: "8+ Applied",
      startDate: "April 18, 2021",
      endDate: "November 30, 2024",
      status: "Active",
    },
    {
      jobTitle: "Frontend Developer",
      address: "67, Maple Street, Austin, USA",
      appliedCount: "15+ Applied",
      startDate: "June 10, 2021",
      endDate: "October 15, 2024",
      status: "Active",
    },
  ];
  return (
    <div>
      <TinnyHeading
        title={"Manage Jobs"}
        path={"manage-jobs"}
        pathName={"Manage Jobs"}
      />
      <div className="bg-softLightBlue py-6 lg:px-6 px-2 rounded-md">
        <h5>Manage Jobs</h5>
        <hr className="my-6 text-lightGray" />
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table text-sm">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>Title</th>
                <th>Applications</th>
                <th>Created & Expired</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobListings.map((job, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold mb-2 lg:text-base text-sm">
                          {job.jobTitle}
                        </div>
                        <div className="text-14 flex items-center">
                          <CiLocationOn className="text-lg" />
                          {job.address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-blue">{job.appliedCount}</span>
                  </td>
                  <td>
                    {job.startDate} - {job.endDate}
                  </td>
                  <td>
                    <span className="text-blue">{job.status}</span>
                  </td>
                  <td className="flex gap-2">
                    <div className="tooltip" data-tip="View">
                      <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                        <FaRegEye />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Approve">
                      <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                        <IoCheckmark />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Reject">
                      <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                        <RxCross2 />
                      </button>
                    </div>
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
