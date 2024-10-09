import axios from "./../../../utils/axios";


export const getRecruitersListing = async (params) => {
  const {
    page = 1,
    limit = 10,
    search = '',
    location = '',
    industry = '',
    organization = '',
    teamSize = ''
  } = params || {}; // Fallback to an empty object if params is undefined

  const queryParams = new URLSearchParams({
    page,
    limit,
    search,
    location,
    industry,
    organization,
    teamSize,
  }).toString();

  const response = await axios.get(`/recruiters?${queryParams}`);
  return response.data;
};
