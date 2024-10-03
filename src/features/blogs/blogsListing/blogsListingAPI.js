import axios from "./../../../utils/axios";

export const getBlogsListing = async () => {
  const response = await axios.get("/blogs");

  return response.data;
};
