import { FaRegEye } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { IoCheckmark } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";

const Shortlist = () => {

  const { currentUser } = useCurrentUser();

  const { data: allShortlistAppliedJobs, refetch } = useQuery({
    queryKey: ["allShortlistAppliedJobs", currentUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied-jobs/email/shortlist/${currentUser?.email}`
      );
      return res.data;
    },
    enabled: !!currentUser?.email,
  });



  return (
    <div>
      <TinnyHeading
        title="Shorlisted Resumes"
        path="shortlist"
        pathName="Shorlisted Resumes"
      />
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 rounded-md">
        <h5>Shorlisted Resumes</h5>
        <hr className="my-6 text-lightGray" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allShortlistAppliedJobs?.map((person, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col justify-between border border-lightGray rounded-lg hover:border-gray transition-all duration-200 lg:p-6 p-3 pb-6"
            >
              <div className="flex lg:flex-row flex-col gap-5">

                <div className="flex lg:flex-row flex-col gap-5">
                  <div className="flex flex-col gap-2 justify-center">
                    <span className="font-bold">{person?.applicantName}</span>
                    <span className="text-sm font-medium text-blue">
                      {person?.jobTitle}
                    </span>
                    <div className="flex justify-between lg:gap-14 lg:pt-0 pt-1 items-center">
                      <span className="text-sm flex items-center gap-1">
                        <CiLocationOn />
                        {person?.applicantEmail}
                      </span>
                      <span className="text-sm flex gap-1 items-center">
                        <IoTimeOutline />
                        {person?.availability}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue overflow-x-auto">
                        {person?.coverLetter}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-2 lg:pt-0 pt-6">
                <div className="tooltip" data-tip="Resume">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <a target="_blank" href={person?.resume}>
                      <FaRegEye />
                    </a>
                  </button>
                </div>
                <div className="tooltip" data-tip="Select">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <IoCheckmark />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shortlist;
