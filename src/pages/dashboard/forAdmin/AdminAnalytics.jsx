import { FaUsers } from "react-icons/fa6";
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


    return (
        <div>
            <TinnyHeading
                title={"Admin Analytics"}
                path="admin-analytics"
                pathName="Admin Analytics"
            />

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                <DashboardCard logo={<FaUsers />} title={'Users'} quantity={users?.users.length} />
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Jobs'} quantity={jobs?.totalJobs} />
                <DashboardCard logo={<VscGitStashApply />} title={'Applications'} quantity={'1000'} />
                <DashboardCard logo={<VscGitStashApply />} title={'Recruiters'} quantity={'100'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'50'} />
            </div>
            <AreaCharts />
        </div>
    );
};

export default AdminAnalytics;
