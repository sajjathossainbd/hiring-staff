import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import useAuth from "./useAuth";

const useCurrentUser = () => {
    const { user } = useAuth();
    const [role, setRole] = useState(null);

    const { data: currentRecruiter, refetch: refetchRecruiter } = useQuery({
        queryKey: ['currentRecruiter', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/recruiters/currentRecruiter/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email && user?.role === "recruiter",
        onSuccess: () => setRole("recruiter"),
    });

    const { data: currentCandidate, refetch: refetchCandidate } = useQuery({
        queryKey: ['currentCandidate', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/candidates/currentCandidate/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email && user?.role === "candidate",
        onSuccess: () => setRole("candidate"),
    });

    useEffect(() => {

        if (user) {
            refetchRecruiter();
            refetchCandidate();
        }
    }, [user, refetchRecruiter, refetchCandidate]);


    return { currentRecruiter, currentCandidate, role, refetchRecruiter, refetchCandidate };
};

export default useCurrentUser;
