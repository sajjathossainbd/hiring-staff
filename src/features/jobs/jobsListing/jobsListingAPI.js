import axios from "./../../../utils/axios";

export const getJobsListing = async (search) => {
  let queryString = "";
  if (search !== "") {
    queryString = `position=${search}`;
  }
  const response = await axios.get(`/jobs/?${queryString}`);

  return response.data;
};
