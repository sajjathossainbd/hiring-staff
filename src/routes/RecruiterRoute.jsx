/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";


const RecruiterRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useAuth()

    const { currentRecruiter } = useCurrentUser();

    if (loading) {
        return <Loading />
    }
    if (user && currentRecruiter) {
        return children
    }
    return <Navigate to="/" state={location?.pathname || "/"}></Navigate>
};

export default RecruiterRoute;