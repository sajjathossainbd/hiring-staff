import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import useAuth from "./useAuth";


const useCurrentRecruiter = () => {

    const { user } = useAuth();

  const { data: currentCandidate, refetch } = useQuery({
    queryKey: ['currentCandidate', user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/candidates/currentCandidate/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  console.log(currentCandidate);

  return { currentCandidate, refetch };
};

export default useCurrentRecruiter;