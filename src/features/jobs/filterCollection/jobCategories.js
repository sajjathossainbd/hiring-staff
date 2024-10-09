import axiosInstance from "../../../utils/axios";

// Fetch job categories from the API
export const getJobCategories = async () => {
  const response = await axiosInstance.get("/jobs/categories");
  return response.data;
};
