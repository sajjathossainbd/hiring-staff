import { FaRegAddressBook, FaUsers } from "react-icons/fa6";
import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { VscGitStashApply } from "react-icons/vsc";
import { MdPlaylistAddCheck } from "react-icons/md";
import AreaCharts from "../../../components/dashboard/AreaChart";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";


const AdminAnalytics = () => {

    const { data: users, } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosInstance.get("/users");
            return res.data;
        },
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
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="700"
                className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                <DashboardCard logo={<FaUsers />} title={'Total Users'} quantity={users?.users.length} />
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Total Jobs'} quantity={jobs?.totalJobs} />
                <DashboardCard logo={<VscGitStashApply />} title={'Total Applications'} quantity={appliedJobs?.length} />
                <DashboardCard logo={<FaRegAddressBook />} title={'Total Recruiters'} quantity={recruiters?.recruiters.length} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Total Shortlisted'} quantity={shortlisted?.length} />
            </div>
            <AreaCharts />
        </div>
    );
};

export default AdminAnalytics;
