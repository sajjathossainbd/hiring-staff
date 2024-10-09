import axios from "./../../../utils/axios";

export const getBlogsListing = async (page, limit, title, tags) => {
  const response = await axios.get("/blogs", {
    params: { page, limit, title, tags },
  });

  return response.data;
};
