import axios from "./../../../utils/axios";

export const getCandidateDetails = async (id) => {
  const response = await axios.get(`/candidates/${id}`);

  return response.data;
};
