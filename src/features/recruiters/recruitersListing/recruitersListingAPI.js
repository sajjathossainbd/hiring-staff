import axiosInstance from "../../../utils/axios";

export const getRecruitersListing = async (filters) => {
  const { search = "", location = "", industry = "", teamSize = "", city = "", page = 1, limit = 9 } = filters || {};


  const queryParams = {};

  if (search) queryParams.search = search;
  if (location) queryParams.location = location;
  if (city) queryParams.city = city; 
  if (industry) queryParams.industry = industry;
  if (teamSize) queryParams.numberOfEmployees = teamSize;  
  if (page) queryParams.page = page;
  if (limit) queryParams.limit = limit;


  try {
    const response = await axiosInstance.get("/recruiters", {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recruiters:", error);
    throw error; // Handle error appropriately
  }
};
