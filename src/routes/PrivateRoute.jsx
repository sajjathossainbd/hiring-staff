/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    
    const location = useLocation()
    const { user, loading } = useAuth()

    if (loading) {
        return <div className="flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto">
            hello
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};


export default PrivateRoute;