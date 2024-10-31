import { AiOutlineDelete, AiOutlineUserDelete } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import TinnyHeading from "../shared/TinnyHeading";
import NoFoundData from "../../../components/ui/NoFoundData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CardPagination } from "../../../components/shared/CardPagination";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { IoBriefcaseOutline } from "react-icons/io5";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import Loading from "../../../components/ui/Loading";

const AppliedJobs = () => {
  const { currentCandidate } = useCurrentUser();

  const userId = currentCandidate?._id;
  const navigate = useNavigate();
  const { page = 1 } = useParams();
  const limit = 12;

  const fetchAppliedJobs = async (currentPage, limit) => {
    const response = await axiosInstance.get(
      `/jobs/applied-jobs/${userId}?page=${currentPage}&limit=${limit}`
    );
    return response.data;
  };

  const {
    // eslint-disable-next-line no-unused-vars
    data: { appliedJobs = [], totalJobs = 0, totalPages = 0 } = {},
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appliedJobs", userId, page],
    queryFn: () => fetchAppliedJobs(page, limit),
    enabled: !!userId,
  });

  console.log(appliedJobs);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "<span style='color: red;'>Are you sure?</span>",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(
            `/jobs/applied-jobs/delete/${id}`,
            {
              data: { email: currentCandidate?.email },
            }
          );

          if (res.data.deletedCount === 1) {
            Swal.fire(
              "Deleted!",
              "Your application has been deleted.",
              "success"
            );
            refetch();
          }
        } catch (error) {
          console.error("Failed to delete application:", error);
          Swal.fire(
            "Error",
            "Failed to delete your application. Please try again.",
            "error"
          );
        }
      }
    });
  };

  // if (isError) return <div>Error loading applied jobs.</div>;
  // if (isLoading) return <Loading />;

  if (appliedJobs?.length === 0 || appliedJobs === undefined) {
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

  if (!appliedJobs.length) {
    return (
      <>
        <TinnyHeading
          title={"Applied Jobs"}
          path={"applied-jobs"}
          pathName={"Applied Jobs"}
        />
        <NoFoundData title="No Applied Jobs Found!" />
      </>
    );
  }
  console.log(appliedJobs);

  return (
    <div>
      <TinnyHeading
        title={"Applied Jobs"}
        path={"applied-jobs"}
        pathName={"Applied Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-10">
        {appliedJobs?.map((job) => {
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
              key={job?._id}
              className="shadow-md light:bg-white dark:border dark:border-white duration-200 rounded-lg p-6 overflow-auto"
            >
              {/* Icon and status button */}
              <div className="flex gap-8 items-center justify-between mb-4">
                <div className="bg-bgLightWhite p-3 text-blue rounded-md text-2xl inline-block">
                  <IoBriefcaseOutline />
                </div>
                <button className="bg-bgDeepBlue text-blue font-medium rounded-full text-14 px-6 py-1 pb-2">
                  Applied
                </button>
              </div>

              {/* Job title, company name, and view details */}
              <div className="flex items-center justify-between">
                <div className="">
                  <h5 className="text-lg font-semibold mb-2">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-16 text-gray">
                    <span className="flex items-center gap-2">
                      <MdOutlineMailOutline />
                      {job?.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Applied date*/}
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-14">
                    Applied Date:
                    <span className="bg-green-100 text-green-500  rounded-full ml-2">
                      {appliedDate}
                    </span>
                  </p>
                </div>
              </div>

              {/* View Details Job & Delete Action */}
              <div className="flex items-center justify-between gap-6 mt-6">
                <Link to={`/job-details/${job?.jobId}`}>
                  <button className="">
                    <PrimaryBtnBlue icon={<VscEye />} title={"See Details"} />
                  </button>
                </Link>
                <div className="flex space-x-4  bg-bgDeepBlue text-blue font-medium rounded-md text-18 p-3">
                  <button onClick={() => handleDelete(job._id)}>
                    <AiOutlineDelete className="text-red-500 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Card Pagination */}
      <CardPagination
        currentPage={parseInt(page)}
        totalPages={totalPages}
        onPageChange={(newPage) =>
          navigate(`/dashboard/applied-jobs/${newPage}`)
        }
      />
    </div>
  );
};

export default AppliedJobs;
