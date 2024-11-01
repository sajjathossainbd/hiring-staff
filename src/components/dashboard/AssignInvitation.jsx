import React from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axios";
import PrimaryBtnBlue from "./../ui/PrimaryBtnBlue";

function AssignInvitation({ job, onClose, refetch }) {
  const { control, handleSubmit, reset } = useForm();
  console.log(job);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.patch(
        `/jobs/interview-schedule/assign/${job._id}`,
        {
          interviewDate: data.interviewDate,
          interviewTime: data.interviewTime,
          message: data.message,
          email:job?.applicantEmail
        }
      );

      if (response.status === 200) {
        toast.success("Interview invitation updated successfully!");
        refetch();
        reset();
        onClose();
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
        console.error("Error assigning assessment:", error);
      }
    }
  };

  return (
    <div>
      <h4 className="text-blue">
        Send Interview Invitation for: {job.jobTitle}
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Interview Date</span>
          </label>
          <Controller
            name="interviewDate"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                required
                className="input input-bordered"
              />
            )}
          />
          <p className="p-2 ">
            {job?.schedule?.map((a) => (
              <p className="text-blue"> {a.interviewDate} </p>
            ))}{" "}
          </p>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Interview Time</span>
          </label>
          <Controller
            name="interviewTime"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="time"
                {...field}
                required
                className="input input-bordered"
              />
            )}
          />
          <p className="p-2">
            {job?.schedule?.map((a) => (
              <p className="text-blue"> {a.interviewTime} </p>
            ))}{" "}
          </p>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                placeholder="Enter a message or ( meet-link )"
                {...field}
                className="textarea textarea-bordered"
              ></textarea>
            )}
          />
          <p className="p-2">
            {job?.schedule?.map((a) => (
              <p className="text-blue"> {a.message} </p>
            ))}{" "}
          </p>
        </div>

        <div className="flex justify-end">
          <button type="submit">
            <PrimaryBtnBlue title={"Send Invitation"} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AssignInvitation;
