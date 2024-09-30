import axios from "./../../../utils/axios";

export const getJobsListing= async () => {
  const response = await axios.get("/jobs");

  return response.data;
};