//To ensure that users can't access the complaint form or dashboard without going through the proper flow. Checks the user's session state from the global constants to either allow access or redirect to the appropriate step in the process.

import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoutes = ({ children, step }) => {
    const { user, loading } = useAppContext();
    if (loading) return null; 

    if (user?.isWhistleblower) return children;

    if (!user) return <Navigate to="/" />;

    if (step === 'emailVerified' && !user.emailVerified) return <Navigate to="/placeholder1" />;
    if (step === 'verified' && !user.isVerified)  return <Navigate to="/placeholder1" />;
    if (step === 'educated' && !user.hasCompletedEducation) return <Navigate to="/placeholder2" />;

    return children;
    
}

export default ProtectedRoutes;