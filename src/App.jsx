import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import CompleteProfile from './pages/CompleteProfile';
import EmployeeVerification from './pages/EmployeeVerification';
import AccountSuccess from './pages/AccountSuccess';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to sign in */}
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        
        {/* Authentication Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        
        {/* Onboarding Routes */}
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/employee-verification" element={<EmployeeVerification />} />
        <Route path="/account-success" element={<AccountSuccess />} />
        
        {/* Dashboard / Home */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        
        {/* Placeholders */}
        <Route path="/learning" element={<div className="p-8 text-center">Learning Center (Coming Soon)</div>} />
        
        {/* Catch all - redirect to sign in */}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
