import axios from "./../../../utils/axios";

export const getCandidatesListing = async (filters) => {
  const {
    profession,
    location,
    skills,
    experience,
    education,
    jobType,
    page,
    limit,
  } = filters || {};

  const response = await axios.get("/candidates", {
    params: {
      profession,
      location,
      skills,
      experience,
      education,
      jobType,
      page,
      limit,
    },
  });

  return response.data;
};
