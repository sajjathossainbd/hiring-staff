import axiosInstance from "./../../../utils/axios";

export const getJobsListing = async ({
  category = "",
  job_title = "",
  job_location = "",
  job_type = "",
  posted_within = "",
  min_salary = "",
  max_salary = "",
  page = 1,
  limit = 9,
} = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (category && category !== "All Category")
      queryParams.append("category", category);
    if (job_title) queryParams.append("job_title", job_title);
    if (job_location && job_location !== "All Location")
      queryParams.append("job_location", job_location);
    if (job_type) queryParams.append("job_type", job_type);
    if (posted_within) queryParams.append("posted_within", posted_within);
    if (min_salary) queryParams.append("min_salary", min_salary);
    if (max_salary) queryParams.append("max_salary", max_salary);
    if (page) queryParams.append("page", page);
    if (limit) queryParams.append("limit", limit);

    const url = `/jobs?${queryParams.toString()}`;

    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
