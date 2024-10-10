import axiosInstance from "./../../../utils/axios";

export const getRecruiterDetails = async (id) => {
  const response = await axiosInstance.get(`/recruiters/${id}`);

  return response.data;
};
