import useAuth from "../../hooks/useAuth";
import DashboardCard from "./shared/DashboardCard";
import TinnyHeading from "./shared/TinnyHeading";


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
                <DashboardCard title={'Posted Jobs'} quantity={'100'} />
                <DashboardCard title={'All Applications'} quantity={'500'} />
                <DashboardCard title={'Message'} quantity={'1000'} />
                <DashboardCard title={'Shortlisted'} quantity={'50'} />
            </div>
        </div>
    );
};

export default DashboardMain;