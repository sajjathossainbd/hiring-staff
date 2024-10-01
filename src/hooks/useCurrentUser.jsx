import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axiosInstance from '../utils/axios';

const useCurrentUser = () => {
    const { user } = useAuth();

    const { data: currentUser, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/current/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });

    return { currentUser, refetch };
};

export default useCurrentUser;
