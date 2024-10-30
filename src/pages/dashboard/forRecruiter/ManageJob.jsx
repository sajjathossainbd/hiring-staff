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
        `/jobs/email/${currentRecruiter?.email}`
      );
      return res.data;
    },
    enabled: !!currentRecruiter?.email,
  });

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosInstance.delete(`/jobs/delete/${id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           Swal.fire("Deleted!", "Job has been deleted.", "success");
  //           refetch();
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <TinnyHeading
        title={"Manage Posted Jobs"}
        path={"manage-jobs"}
        pathName={"Posted Jobs"}
      />
      {/* Create A New Job Post */}
      {/* <div className="flex justify-end">
        <button>
          <PrimaryBtnBlue icon={<GoPlus />} title="Create A Job Post" />
        </button>
      </div> */}

      {/* All Job Post */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
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
    </div>
  );
};

export default ManageJob;
