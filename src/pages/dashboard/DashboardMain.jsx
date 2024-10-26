import useCurrentCandidate from "../../hooks/useCurrentCandidate";
import useCurrentRecruiter from "../../hooks/useCurrentRecruiter";
import AdminAnalytics from "./forAdmin/AdminAnalytics";
import CandidatesAnalytics from "./forCandidates/CandidatesAnalytics";
import RecruitersAnalytics from "./forRecruiter/RecruitersAnalytics";

const DashboardMain = () => {

    const { currentCandidate } = useCurrentCandidate()
    const { currentRecruiter } = useCurrentRecruiter()

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