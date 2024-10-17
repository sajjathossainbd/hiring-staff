import axiosInstance from "../../../utils/axios";

export const getRecruitersListing = async (filters) => {
  const {
    search = "",
    city = "",
    industry = "",
    teamSize = "",
    page = 1,
    limit = 9,
  } = filters || {};

  const queryParams = {};

  if (search) queryParams.search = search;
  if (city) queryParams.city = city;
  if (industry) queryParams.industry = industry;
  if (teamSize) queryParams.numberOfEmployees = parseInt(teamSize, 10);
  if (page) queryParams.page = page;
  if (limit) queryParams.limit = limit;

  try {
    const response = await axiosInstance.get("/recruiters", {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recruiters:", error);
    throw error;
  }
};
