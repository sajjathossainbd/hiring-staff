import axios from "./../../../utils/axios";

export const getBlogsListing = async (page, limit, query) => {
  const response = await axios.get("/blogs", {
    params: { page, limit, query },
  });

  return response.data;
};
