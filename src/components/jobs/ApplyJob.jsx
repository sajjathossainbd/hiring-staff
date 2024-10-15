import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import useCurrentUser from "./../../hooks/useCurrentUser";
import axiosInstance from "../../utils/axios";
import toast from "react-hot-toast";

function ApplyJob({ job, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { currentUser } = useCurrentUser();
  const { _id: jobId, jobTitle, company_email, company_id } = job;

  const onSubmit = async (data) => {
    const applicationData = {
      jobId,
      jobTitle,
      company_email,
      company_id,
      applicantId: currentUser?._id,
      applicantName: currentUser?.name,
      applicantEmail: currentUser?.email,
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
        reset();
        onClose();
      }
    } catch (error) {
      toast.error("Error submitting the application.");
      console.error("Error submitting application:", error);
    }
  };

  return (
    <>
      <form
        className="p-2 bg-white rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Cover Letter Section */}
        <div className="mb-6">
          <label className="block text-gray text-12 mb-2">Cover Letter</label>
          <textarea
            {...register("coverLetter", {
              required: "Cover letter is required",
            })}
            className="w-full p-3 rounded-md focus:outline-none bg-lightText"
            rows="4"
            placeholder={`${currentUser.name}, Your cover letter`}
          ></textarea>
          {errors.coverLetter && (
            <p className="text-red-500 text-sm mt-1">
              {errors.coverLetter.message}
            </p>
          )}
        </div>

        {/* Availability Section */}
        <div className="mb-6">
          <label className="block text-gray text-14 mb-2">
            Your availability
          </label>
          <div className="flex items-center mb-2">
            <input
              {...register("availability", { required: true })}
              id="available-immediately"
              type="radio"
              value="yes"
              className="mr-2"
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
          <label className="block text-gray text-14 mb-2">
            Resume (Optional)
          </label>
          <input
            type="text"
            placeholder="Google Drive Link"
            className="block w-full text-14 rounded-md outline-none py-2 px-3 bg-lightText"
            {...register("resume")}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue hover:bg-darkBlue text-white py-2 px-6 mt-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ApplyJob;
