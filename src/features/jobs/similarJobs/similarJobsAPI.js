import axios from "./../../../utils/axios";

export const getSimilarJobs = async ({ category }) => {
  const response = await axios.get(`/jobs?category=${category}`);
  return response.data;
};
