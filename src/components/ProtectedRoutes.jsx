//To ensure that users can't access the complaint form or dashboard without going through the proper flow. Checks the user's session state from the global constants to either allow access or redirect to the appropriate step in the process.

import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";


const ProtectedRoutes = ({ children, step }) => {
    const { user, loading } = useAppContext();
    const location = useLocation();


    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0F766E]"></div>
            </div>
    ); 

    if (user?.isWhistleblower) return children;

    if (!user) return <Navigate to="/sign-in" state={{ from: location }} replace />;

    if (step === 'emailVerified' && !user.emailVerified) return <Navigate to="/check-email" replace />;
    if (step === 'verified' && !user.isVerified)  return <Navigate to="/employee-verification" replace />;
    if (step === 'educated' && !user.hasCompletedEducation) return <Navigate to="/learning" replace />;

    return children;
    
}

export default ProtectedRoutes;