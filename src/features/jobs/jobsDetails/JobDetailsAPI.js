import axiosInstance from "./../../../utils/axios";

export const getJobDetails = async (id) => {
  const response = await axiosInstance.get(`/jobs/${id}`);

  return response.data;
};
