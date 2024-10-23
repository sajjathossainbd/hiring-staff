import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";
import axiosInstance from "../../../utils/axios";
import TinnyHeading from "../shared/TinnyHeading";
import DashboardCard from "../shared/DashboardCard";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { SiImessage } from "react-icons/si";
import StackedBarChart from "../../../components/dashboard/StackedBarChart";

const RecruitersAnalytics = () => {

    const { currentUser } = useCurrentUser();

    const { data: myJobs } = useQuery({
        queryKey: ["myJobs", currentUser?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/jobs/email/${currentUser.email}`);
            return res.data;
        },
        enabled: !!currentUser?.email,
    });

    const { data: allAppliedJobs } = useQuery({
        queryKey: ["allAppliedJobs", currentUser?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/jobs/applied-jobs/email/${currentUser.email}`
            );
            return res.data;
        },
        enabled: !!currentUser?.email,
    });

    const { data: allShortlistAppliedJobs } = useQuery({
        queryKey: ["allShortlistAppliedJobs", currentUser?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/jobs/applied-jobs/email/shortlist/${currentUser?.email}`
            );
            return res.data;
        },
        enabled: !!currentUser?.email,
    });


    return (
        <div>
            <TinnyHeading
                title={"Recruiter Analytics"}
                path="dashboard-main"
                pathName="Dashboard Main"
            />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <DashboardCard logo={<IoBagRemoveOutline />} title={'My Jobs'} quantity={myJobs?.length} />
                <DashboardCard logo={<VscGitStashApply />} title={'Total Applications'} quantity={allAppliedJobs?.length} />
                <DashboardCard logo={<SiImessage />} title={'Total Message'} quantity={'43'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={allShortlistAppliedJobs?.length} />
            </div>

            <StackedBarChart
                jobsQuantity={myJobs?.length}
                applicationsQuantity={allAppliedJobs?.length}
                messageQuantity={'43'}
                shortlistedQuantity={allShortlistAppliedJobs?.length}
            />

        </div >
    );
};

export default RecruitersAnalytics;