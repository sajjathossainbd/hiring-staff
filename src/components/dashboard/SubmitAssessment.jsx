/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axios"; // Adjust the import based on your project structure
import PrimaryBtnBlue from "../ui/PrimaryBtnBlue";
import toast from "react-hot-toast";

function SubmitAssessment({ job, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { assessments } = job;
  let details = "";
  let dueDate = "";

  if (assessments && assessments.length > 0) {
    const [{ details: assessmentDetails, dueDate: assessmentDueDate }] =
      assessments;
    details = assessmentDetails;
    dueDate = assessmentDueDate;
  } else {
    console.log("No assessments available");
  }

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.patch(
        `/jobs/applied-jobs/submit-assessment/${job?._id}`,
        {
          assignmentDetails: data.assignmentDetails,
          submissionDate: new Date(),
        }
      );

      if (response.status === 200) {
        toast.success("Assignment submitted successfully!");
        reset();
        onClose();
      }
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.message ===
          "Assignment has already been submitted for this job."
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
        console.error("Error assigning assessment:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">
        Assigned Assessment for {job.jobTitle}
      </h2>

      {/* Display Assigned Assessment Details */}
      <div className="mb-4 p-3 border border-gray rounded-md">
        <h4>Assessment Details:</h4>
        <p>
          <strong className=" dark:text-white">Details:</strong>{" "}
          {details || "No details available"}
        </p>
        <p>
          <strong className=" dark:text-white">Due Date:</strong>{" "}
          {dueDate
            ? new Date(dueDate).toLocaleDateString()
            : "No due date available"}
        </p>
      </div>

      {/* Form to Submit Assignment */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray dark:text-white mb-2">
            Assignment Submission
          </label>
          <textarea
            {...register("assignmentDetails", {
              required: "Submission details are required",
            })}
            className={`w-full p-2 border focus:outline-none rounded-md ${
              errors.assignmentDetails ? "border-red-500" : "border-gray"
            }`}
            rows="4"
            placeholder="Enter your assignment submission details here..."
          ></textarea>
          {errors.assignmentDetails && (
            <p className="text-red-500 text-sm mt-1">
              {errors.assignmentDetails.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <PrimaryBtnBlue title={"Submit Assignment"} type="submit">
            Submit Assignment
          </PrimaryBtnBlue>
        </div>
      </form>
    </div>
  );
}

export default SubmitAssessment;
