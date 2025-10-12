import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // If not logged in, redirect to login page
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    // If logged in, show the page
    return children;
};

export default ProtectedRoute;
