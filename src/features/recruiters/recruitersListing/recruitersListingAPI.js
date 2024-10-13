
import axiosInstance from "../../../utils/axios";

export const getRecruitersListing = async (filters) => {
  const {
    search,
    location,
    industry,
    numberOfEmployees,
    page,
    limit,
  } = filters || {}; // Fallback to an empty object if params is undefined

  // Construct only non-empty params
  const queryParams = {};

  if (search) queryParams.search = search;
  if (location) queryParams.location = location;
  if (industry) queryParams.industry = industry;
  if (numberOfEmployees) queryParams.numberOfEmployees = numberOfEmployees;
  if (page) queryParams.page = page;
  if (limit) queryParams.limit = limit;

  try {
    const response = await axiosInstance.get("/recruiters", { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("Error fetching recruiters:", error);
    throw error; // You might want to handle this error in the UI
  }
};
