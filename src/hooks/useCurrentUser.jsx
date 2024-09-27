import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const useCurrentUser = () => {

    const { user } = useAuth();

    const { data: currentUser, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/current/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });

    return { currentUser, refetch };
};

export default useCurrentUser;
