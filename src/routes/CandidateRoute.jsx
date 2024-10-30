/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";

const CandidateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const { currentCandidate } = useCurrentUser();

    if (loading) {
        return <Loading />;
    }

    if (user && currentCandidate) {
        return children;
    }
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default CandidateRoute;
