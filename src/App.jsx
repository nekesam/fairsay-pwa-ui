import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import CompleteProfile from './pages/CompleteProfile';
import EmployeeVerification from './pages/EmployeeVerification';
import AccountSuccess from './pages/AccountSuccess';
import Dashboard from './pages/Dashboard';
import ComplaintForm from './pages/ComplaintForm';
import ComplaintSuccess from './pages/ComplaintSuccess';
import MyComplaints from './pages/MyComplaints';
import EducationHub from './pages/EducationHub';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import AIAssistant from './pages/AIAssistant';
import Whistleblowing from './pages/Whistleblowing';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';
import DeleteAccount from './pages/DeleteAccount';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminComplaints from './pages/admin/AdminComplaints';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSecurity from './pages/admin/AdminSecurity';
import ComplaintFeedback from './pages/ComplaintFeedback';
import AnonymousReport from './pages/AnonymousReport';

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
        
        {/* Complaint Routes */}
        <Route path="/file-complaint" element={<ComplaintForm />} />
        <Route path="/complaint-success" element={<ComplaintSuccess />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
        <Route path="/complaint-feedback" element={<ComplaintFeedback />} />
        
        {/* Education Hub Routes */}
        <Route path="/learning" element={<EducationHub />} />
        <Route path="/learning/lesson/:courseId/:lessonId" element={<Lesson />} />
        <Route path="/learning/quiz/:courseId" element={<Quiz />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/whistleblowing" element={<AnonymousReport />} />
        <Route path="/anonymous-report" element={<AnonymousReport />} />
        
        {/* Profile Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
        <Route path="/profile/delete-account" element={<DeleteAccount />} />
        
        {/* Admin Portal Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/complaints" element={<AdminComplaints />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/security" element={<AdminSecurity />} />
        
        {/* Catch all - redirect to sign in */}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
