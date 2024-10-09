import axiosInstance from "../../../../utils/axios";

// Fetch job locations from the API
export const getJobLocations = async () => {
  const response = await axiosInstance.get("/jobs/job_location");
  return response.data;
};
