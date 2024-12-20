/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axios";
import toast from "react-hot-toast";
import useCurrentUser from "../../hooks/useCurrentUser";
import PrimaryBtnWhite from "../ui/PrimaryBtnWhite";

function ApplyJob({ job, onClose, refetch }) {
  const { currentCandidate } = useCurrentUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { _id: jobId, jobTitle, email, company_name } = job;
  // console.log(job);

  const onSubmit = async (data) => {
    const applicationData = {
      jobId,
      jobTitle,
      email,
      company_name,
      applicantId: currentCandidate?._id,
      applicantName: currentCandidate?.first_name,
      applicantEmail: currentCandidate?.email,
      applicantImage: currentCandidate?.photo_url,
      coverLetter: data.coverLetter,
      resume: data.resume,
      availability: data.availability,
    };

    try {
      const response = await axiosInstance.post(
        `/jobs/applied-jobs`,
        applicationData
      );

      if (response.status === 201) {
        toast.success("Application submitted successfully!");
        setTimeout(() => {
          reset();
          onClose();
          refetch()
        }, 2000);
      }
    } catch (error) {
      toast.error("Already applied in this job.");
      console.error("Error submitting application:", error);
    }
  };

  return (
    <>
      <form
        className="p-2 light:bg-white rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Cover Letter Section */}
        <div className="mb-6">
          <label className="block light:text-gray text-12 mb-2">
            Cover Letter
          </label>
          <textarea
            {...register("coverLetter", {
              required: "Cover letter is required",
            })}
            className="w-full p-3 rounded-md focus:outline-none bg-lightText dark:text-black"
            rows="4"
            placeholder={`Your cover letter`}
          ></textarea>
          {errors?.coverLetter && (
            <p className="text-red-500 text-sm mt-1">
              {errors?.coverLetter.message}
            </p>
          )}
        </div>

        {/* Availability Section */}
        <div className="mb-6">
          <label className="block light:text-gray text-14 mb-2">
            Your availability
          </label>
          <div className="flex items-center mb-2">
            <input
              {...register("availability", { required: true })}
              id="available-immediately"
              type="radio"
              value="yes"
              required
              className="mr-2 dark:text-gray"
            />
            <label htmlFor="available-immediately" className="text-gray-700">
              Yes, I am available to join immediately
            </label>
          </div>
          <div className="flex items-center">
            <input
              {...register("availability", { required: true })}
              id="specify-availability"
              type="radio"
              value="no"
              required
              className="mr-2"
            />
            <label htmlFor="specify-availability" className="text-gray-700">
              No (Please specify your availability)
            </label>
          </div>
          {errors.availability && (
            <p className="text-red-500 text-sm mt-1">
              Please select your availability
            </p>
          )}
        </div>

        {/* File Upload Section */}
        <div className="mb-6">
          <label className="block light:text-gray text-14 mb-2">
            Resume (Optional)
          </label>
          <input
            type="text"
            required
            placeholder="Google Drive Link"
            className="block dark:text-gray w-full text-14 rounded-md outline-none py-2 px-3 bg-lightText"
            {...register("resume")}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="">
            <PrimaryBtnWhite title={"Submit"} />
          </button>
        </div>
      </form>
    </>
  );
}

export default ApplyJob;
