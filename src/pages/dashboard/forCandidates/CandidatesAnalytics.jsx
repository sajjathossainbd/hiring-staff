import DashboardCard from "../shared/DashboardCard";
import TinnyHeading from "../shared/TinnyHeading";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { SiImessage } from "react-icons/si";
import StackedBarChart from "../../../components/dashboard/StackedBarChart";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";



const CandidatesAnalytics = () => {

    const { currentCandidate } = useCurrentUser();

    const { data: jobs, } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosInstance.get("/jobs");
            return res.data;
        },
    });

    const {
        data: appliedJobs = [],
    } = useQuery({
        queryKey: ["appliedJobs"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/jobs/applied-jobs/${currentCandidate?._id}`);
            return res.data;
        },
    });

    const { data: MyShortlistedJob, } = useQuery({
        queryKey: ['MyShortlistedJob'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/jobs/applied-jobs/shortlist/approved/${currentCandidate?.email}`);
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
                <DashboardCard logo={<IoBagRemoveOutline />} title={'Total Jobs'} quantity={jobs?.totalJobs} />
                <DashboardCard logo={<VscGitStashApply />} title={'My Applications'} quantity={appliedJobs?.length} />
                <DashboardCard logo={<SiImessage />} title={'Total Message'} quantity={'43'} />
                <DashboardCard logo={<MdPlaylistAddCheck />} title={'Shortlisted'} quantity={MyShortlistedJob?.length} />
            </div>

            <StackedBarChart
                jobsQuantity={jobs?.totalJobs}
                applicationsQuantity={appliedJobs?.length}
                messageQuantity={'43'}
                shortlistedQuantity={MyShortlistedJob?.length}
            />
            
        </div >
    );
};

export default CandidatesAnalytics;