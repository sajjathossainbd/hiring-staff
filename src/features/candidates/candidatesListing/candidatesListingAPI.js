import axios from "./../../../utils/axios";

export const getCandidatesListing = async () => {
  const response = await axios.get("/candidates");

  return response.data;
};
