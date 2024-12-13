import React from "react";
import { Navigate, useLocation} from "react-router-dom";

const RedirectHandler = ({ children }) => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    return <Navigate to={from} />
}

export default RedirectHandler;