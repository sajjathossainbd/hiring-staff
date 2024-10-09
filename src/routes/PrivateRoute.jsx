/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";


const PrivateRoute = ({ children }) => {
    
    const location = useLocation()
    const { user, loading } = useAuth()

    if (loading) {
        return <Loading/>
    }

    if (user) {
        return children
    }
    return <Navigate to="/sign-in" state={location?.pathname || "/"}></Navigate>
};


export default PrivateRoute;