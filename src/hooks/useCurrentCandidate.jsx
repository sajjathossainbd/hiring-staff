import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import useAuth from "./useAuth";


const useCurrentCandidate = () => {

  const { user } = useAuth();

  const { data: currentCandidate, refetch } = useQuery({
    queryKey: ['currentCandidate', user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/candidates/currentCandidate/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return { currentCandidate, refetch };
};

export default useCurrentCandidate;