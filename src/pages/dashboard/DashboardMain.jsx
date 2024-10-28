
import useCurrentUser from "../../hooks/useCurrentUser";
import AdminAnalytics from "./forAdmin/AdminAnalytics";
import CandidatesAnalytics from "./forCandidates/CandidatesAnalytics";
import RecruitersAnalytics from "./forRecruiter/RecruitersAnalytics";

const DashboardMain = () => {

    const { currentRecruiter, currentCandidate } = useCurrentUser();

    if (!currentRecruiter && !currentCandidate) {
        return <AdminAnalytics />
    }

    if (currentRecruiter) {
        return <RecruitersAnalytics />
    }

    if (currentCandidate) {
        return <CandidatesAnalytics />
    }
};

export default DashboardMain;