import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { GoBookmark } from "react-icons/go";
import TinnyHeading from "../shared/TinnyHeading";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

const ShortlistedJobs = () => {
  const { currentUser } = useCurrentUser();

  const { data: shortlistAppliedJobs, refetch } = useQuery({
    queryKey: ["shortlistAppliedJobs", currentUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied-jobs/shortlist/approved/${currentUser?.email}`
      );
      return res.data;
    },
    enabled: !!currentUser?.email,
  });

  return (
    <div>
      <TinnyHeading
        title={"Shortlisted Jobs"}
        path={"shortlisted-jobs"}
        pathName={"Shortlisted Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-6">
        {shortlistAppliedJobs?.map((job, idx) => (
          <div
            key={idx}
            className=" shadow-md bg-bgLightBlue hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto cursor-pointer"
          >
            <div>
              <div className="flex items-center">
                <img
                  src={job.logoUrl || "	https://via.placeholder.com/50"}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <h5 className="">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 flex-wrap ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.company_email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className=" ">
                <p className="text-12">
                  Applied on:
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    {job?.appliedDate}
                  </span>
                </p>
              </div>

              <div className="flex space-x-4 text-gray">
                <p className="text-12 bg-yellow-300  px-2 py-1 rounded-lg">
                  {job.shortlist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortlistedJobs;
