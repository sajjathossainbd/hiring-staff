import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import useAuth from "./useAuth";


const useCurrentRecruiter = () => {

    const { user } = useAuth();

    const { data: currentRecruiter, refetch } = useQuery({
        queryKey: ['currentRecruiter', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/recruiters/currentRecruiter/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });


    return { currentRecruiter, refetch };
};

export default useCurrentRecruiter;