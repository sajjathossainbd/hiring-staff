import axios from "./../../../utils/axios";

export const getRecruitersListing = async () => {
  const response = await axios.get("/recruiters");

  return response.data;
};
