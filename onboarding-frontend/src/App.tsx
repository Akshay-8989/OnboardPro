// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import HRPortal from './pages/HRPortal';
import ITSupport from './pages/ITSupport';
import Intranet from './pages/Intranet';
import EmailSetup from './pages/EmailSetup';
import SoftwareDownloads from './pages/SoftwareDownloads';
import EmployeeDirectory from './pages/EmployeeDirectory';
import { useAuth } from './context/AuthContext';

// Intranet subpages
import CompanyPolicies from './pages/CompanyPolicies';
import Announcements from './pages/Announcements';
import InternalTools from './pages/IntranetTools';
import KnowledgeBase from './pages/KnowledgeBase';
import TeamDirectory from './pages/TeamDirectory';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/downloads" element={<SoftwareDownloads />} />
      <Route path="/email-setup" element={<EmailSetup />} />
      <Route path="/intranet" element={<Intranet />} />
      <Route path="/it-helpdesk" element={<ITSupport />} />
      <Route path="/hr-portal" element={<HRPortal />} />
      <Route path="/employees" element={<EmployeeDirectory />} />

      {/* ✅ Intranet Subpages */}
      <Route path="/company-policies" element={<CompanyPolicies />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/internal-tools" element={<InternalTools />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
      <Route path="/team-directory" element={<TeamDirectory />} />
    </Routes>
  );
}
