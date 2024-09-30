import { SiImessage } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import DashboardCard from "./shared/DashboardCard";
import TinnyHeading from "./shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import StackedBarChart from "../../components/dashboard/StackedBarChart";

const DashboardMain = () => {

    const { user } = useAuth()

    return (
        <div>
            <TinnyHeading
                title={user?.displayName}
                path="dashboard-main"
                pathName="Dashboard Main"
            />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Posted Jobs'} quantity={'100'} />
                <DashboardCard logo={<VscGitStashApply />} title={'All Applications'} quantity={'500'} />
                <DashboardCard logo={<SiImessage />} title={'Message'} quantity={'1000'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={'50'} />
            </div>

            <StackedBarChart/>
        </div >
    );
};

export default DashboardMain;