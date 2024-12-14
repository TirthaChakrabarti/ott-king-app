import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    console.log(location.pathname);

    if (!token) {
        return <Navigate to={"/log-in"} state={{ from: location }}/>
    }

    if (token && location.pathname === "/log-in") {
        return <Navigate to={"/"} />;
    }

    return children;
}

export default ProtectedRoute