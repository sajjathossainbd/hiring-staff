import { FaUsers } from "react-icons/fa6";
import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { VscGitStashApply } from "react-icons/vsc";
import { MdPlaylistAddCheck } from "react-icons/md";
import StackedBarChart from "../../../components/dashboard/StackedBarChart";


const AdminAnalytics = () => {

    return (
        <div>
            <TinnyHeading
                title={"Admin Analytics"}
                path="admin-analytics"
                pathName="Admin Analytics"
            />

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<FaUsers />} title={'All Users'} quantity={'100'} />
                <DashboardCard logo={<IoBagRemoveOutline />} title={'All Jobs'} quantity={'500'} />
                <DashboardCard logo={<VscGitStashApply />} title={'All Applications'} quantity={'1000'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'50'} />
            </div>
            <StackedBarChart />
        </div>
    );
};

export default AdminAnalytics;
