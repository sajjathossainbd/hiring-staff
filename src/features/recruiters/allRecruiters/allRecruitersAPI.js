import axios from "../../../utils/axios";

export const getAllRecruiters = async () => {
  const response = await axios.get("/recruiters");

  return response.data;
};
