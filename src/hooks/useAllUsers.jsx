import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });

    return { users, refetch };
};

export default useAllUsers;