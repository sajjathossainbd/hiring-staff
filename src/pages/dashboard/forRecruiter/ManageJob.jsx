import TinnyHeading from "../shared/TinnyHeading";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useCurrentUser from "../../../hooks/useCurrentUser";
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "<span style='color: red;'>Are you sure?</span>",
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
        title={"Manage Posted Jobs"}
        path={"manage-jobs"}
        pathName={"Posted Jobs"}
      />
     

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
              onDelete={() => handleDelete(job?._id)}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ManageJob;
