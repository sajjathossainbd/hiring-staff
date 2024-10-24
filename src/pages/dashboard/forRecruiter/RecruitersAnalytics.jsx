import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import TinnyHeading from "../shared/TinnyHeading";
import DashboardCard from "../shared/DashboardCard";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { SiImessage } from "react-icons/si";
import StackedBarChart from "../../../components/dashboard/StackedBarChart";
import useCurrentRecruiter from "../../../hooks/useCurrentRecruiter";

const RecruitersAnalytics = () => {

    const { currentRecruiter } = useCurrentRecruiter();

    const { data: myJobs } = useQuery({
        queryKey: ["myJobs", currentRecruiter?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/jobs/email/${currentRecruiter.email}`);
            return res.data;
        },
        enabled: !!currentRecruiter?.email,
    });

    const { data: allAppliedJobs } = useQuery({
        queryKey: ["allAppliedJobs", currentRecruiter?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/jobs/applied-jobs/email/${currentRecruiter.email}`
            );
            return res.data;
        },
        enabled: !!currentRecruiter?.email,
    });

    const { data: allShortlistAppliedJobs } = useQuery({
        queryKey: ["allShortlistAppliedJobs", currentRecruiter?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/jobs/applied-jobs/email/shortlist/${currentRecruiter?.email}`
            );
            return res.data;
        },
        enabled: !!currentRecruiter?.email,
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