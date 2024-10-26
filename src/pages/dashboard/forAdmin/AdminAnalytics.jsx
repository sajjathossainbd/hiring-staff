import { FaRegAddressBook, FaUsers } from "react-icons/fa6";
import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { VscGitStashApply } from "react-icons/vsc";
import { MdPlaylistAddCheck } from "react-icons/md";
import AreaCharts from "../../../components/dashboard/AreaChart";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import { useParams } from "react-router-dom";


const AdminAnalytics = () => {

    const { page = 1 } = useParams();
    const limit = 100;

    // Fetch users with pagination
    const fetchUsers = async (currentPage, limit) => {
        const response = await axiosInstance.get(
            `/candidates?page=${currentPage}&limit=${limit}`
        );
        return response.data;
    };

    const {
        data: totalCandidates,
    } = useQuery({
        queryKey: ["users", page],
        queryFn: () => fetchUsers(page, limit),
        enabled: !!page,
    });

    const { data: jobs, } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosInstance.get("/jobs");
            return res.data;
        },
    });

    const { data: appliedJobs, } = useQuery({
        queryKey: ['appliedJobs'],
        queryFn: async () => {
            const res = await axiosInstance.get("/jobs/get/applied-jobs");
            return res.data;
        },
    });

    const { data: recruiters, } = useQuery({
        queryKey: ['recruiters'],
        queryFn: async () => {
            const res = await axiosInstance.get("/recruiters");
            return res.data;
        },
    });

    const { data: shortlisted, } = useQuery({
        queryKey: ['shortlisted'],
        queryFn: async () => {
            const res = await axiosInstance.get("/jobs/applied-jobs/shortlist/approved");
            return res.data;
        },
    });


    return (
        <div>
            <TinnyHeading
                title={"Admin Analytics"}
                path="admin-analytics"
                pathName="Admin Analytics"
            />

            <div
                className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Total Jobs'} quantity={jobs?.totalJobs} />
                <DashboardCard logo={<FaUsers />} title={'Total Candidates'} quantity={totalCandidates?.candidates?.length} />
                <DashboardCard logo={<FaRegAddressBook />} title={'Total Recruiters'} quantity={recruiters?.recruiters?.length} />
                <DashboardCard logo={<VscGitStashApply />} title={'Total Applications'} quantity={appliedJobs?.length} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Total Shortlisted'} quantity={shortlisted?.length} />
            </div>
            <AreaCharts
                UsersQuantity={totalCandidates?.candidates?.length}
                totalJobsQuantity={jobs?.totalJobs}
                applicationsQuantity={appliedJobs?.length}
                recruitersQuantity={recruiters?.recruiters?.length}
                shortlistedQuantity={shortlisted?.length}
            />
        </div>
    );
};

export default AdminAnalytics;
