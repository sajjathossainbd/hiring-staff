import axios from "./../../../utils/axios";

export const getRecruitersListing = async (filters) => {
  const {
    search = "",
    location = "",
    industry = "",
    numberOfEmployees = "",
    page,
    limit,
  } = filters || {}; // Fallback to an empty object if params is undefined

  const response = await axios.get("/recruiters", {
    params: {
      search,
      location,
      industry,
      numberOfEmployees,
      page,
      limit,
    },
  });

  return response.data;
};
