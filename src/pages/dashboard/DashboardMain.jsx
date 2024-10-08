import { SiImessage } from "react-icons/si";
import DashboardCard from "./shared/DashboardCard";
import TinnyHeading from "./shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import StackedBarChart from "../../components/dashboard/StackedBarChart";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import useCurrentUser from "../../hooks/useCurrentUser";

const DashboardMain = () => {

    const { currenUser } = useCurrentUser()

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
                title={currenUser?.displayName}
                path="dashboard-main"
                pathName="Dashboard Main"
            />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Jobs'} quantity={jobs?.totalJobs} />
                <DashboardCard logo={<VscGitStashApply />} title={'Applications'} quantity={'50'} />
                <DashboardCard logo={<SiImessage />} title={'Message'} quantity={'100'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'5'} />
            </div>

            <StackedBarChart />
        </div >
    );
};

export default DashboardMain;