import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { SiImessage } from "react-icons/si";
import StackedBarChart from "../../../components/dashboard/StackedBarChart";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";



const CandidatesAnalytics = () => {


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
                title={"Candidates Analytics"}
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

export default CandidatesAnalytics;