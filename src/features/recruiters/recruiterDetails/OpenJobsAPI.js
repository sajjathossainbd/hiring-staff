import axiosInstance from "./../../../utils/axios";

export const getRecruiterOpenJobs = async (id) => {
  const response = await axiosInstance.get(`/recruiters/Openjobs/${id}`);

  return response.data;
};
