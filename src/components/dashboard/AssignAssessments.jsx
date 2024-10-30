import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axios";
import PrimaryBtnBlue from "../ui/PrimaryBtnBlue";
import toast from "react-hot-toast";

function AssignAssessments({ job, onClose }) {
  console.log(job);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const assessmentData = {
      assessmentDetails: data.assessmentDetails,
      dueDate: data.dueDate,
    };
    console.log(assessmentData);
    try {
      const response = await axiosInstance.patch(
        `/jobs/applied-jobs/assign-assessment/${job?._id}`,
        assessmentData
      );

      console.log(response.data);
      if (response.status === 200) {
        toast.success("Assessment assigned successfully!");
        setTimeout(() => {
          reset();
          onClose();
        }, 2000);
      }
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.message ===
          "Assessment has already been assigned for this job."
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
        console.error("Error assigning assessment:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        Assign Assessment for {job.jobTitle}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Assessment Details Field */}
        <div className="mb-4">
          <label className="block text-gray mb-2">Assessment Details</label>
          <textarea
            {...register("assessmentDetails", {
              required: "Assessment details are required",
            })}
            className={`w-full p-2 border rounded-md ${
              errors.assessmentDetails ? "border-red-500" : "border-gray"
            }`}
            rows="4"
            placeholder="Enter details about the assessment"
          ></textarea>
          {errors.assessmentDetails && (
            <p className="text-red-500 text-14 mt-1">
              {errors.assessmentDetails.message}
            </p>
          )}
        </div>

        {/* Due Date Field */}
        <div className="mb-4">
          <label className="block text-gray mb-2">Due Date</label>
          <input
            type="date"
            {...register("dueDate", { required: "Due date is required" })}
            className={`w-full p-2 border rounded-md ${
              errors.dueDate ? "border-red-500" : "border-gray"
            }`}
          />
          {errors.dueDate && (
            <p className="text-red-500 text-14 mt-1">
              {errors.dueDate.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <PrimaryBtnBlue title={"Assign Assessment"} type="submit">
            Assign Assessment
          </PrimaryBtnBlue>
        </div>
      </form>
    </div>
  );
}

export default AssignAssessments;
