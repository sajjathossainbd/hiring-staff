import AdminAnalytics from "./forAdmin/AdminAnalytics";
import useCurrentUser from "../../hooks/useCurrentUser";
import CandidatesAnalytics from "./forCandidates/CandidatesAnalytics";
import RecruitersAnalytics from "./forRecruiter/RecruitersAnalytics";

const DashboardMain = () => {

    const { currentUser } = useCurrentUser()

    if (currentUser?.role === 'admin') {
        return <AdminAnalytics />
    }

    if (currentUser?.role === 'recruiter') {
        return  <RecruitersAnalytics />
    }

    if (currentUser?.role === 'candidate') {
        return <CandidatesAnalytics />
    }
};

export default DashboardMain;