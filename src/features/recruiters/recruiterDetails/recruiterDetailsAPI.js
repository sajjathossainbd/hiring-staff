import axios from "./../../../utils/axios";

export const getRecruiterDetails = async (id) => {
  const response = await axios.get(`/recruiters/${id}`);

  return response.data;
};
