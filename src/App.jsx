import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Alert } from './components/Alert';
import LandingPage from './pages/landingpage'; 
import ProtectedRoutes from './components/ProtectedRoutes';
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
    <AppProvider>
      <Alert />
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
        
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
        <Route path="/dashboard" element={
          //<ProtectedRoutes step="emailVerified">
          <Dashboard /> 
          //</ProtectedRoutes>
          } />
        <Route path="/home" element={<Dashboard />} />
        
        {/* Placeholders */}
        <Route path="/learning" element={
          <ProtectedRoutes step="emailVerified">
            <div className="p-8 text-center">Learning Center (Coming Soon)</div>
          </ProtectedRoutes>
        } />
        
        {/* Catch all - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
