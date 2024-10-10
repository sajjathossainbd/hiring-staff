import AdminAnalytics from "./forAdmin/AdminAnalytics";
import useCurrentUser from "../../hooks/useCurrentUser";
import CandidatesAnalytics from "./forCandidates/CandidatesAnalytics";

const DashboardMain = () => {

    const { currentUser } = useCurrentUser()

    if (currentUser?.role === 'admin') {
        return <AdminAnalytics />
    }

    if (currentUser?.role === 'recruiter') {
        return  <CandidatesAnalytics />
    }

    if (currentUser?.role === 'candidate') {
        return <CandidatesAnalytics />
    }
};

export default DashboardMain;