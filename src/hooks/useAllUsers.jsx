import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

const useAllUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users");
      return res.data;
    },
  });

  return { users, refetch };
};

export default useAllUsers;
