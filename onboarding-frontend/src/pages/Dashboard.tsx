import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faUserEdit, faHeadset, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const featureCards = [
    {
      title: 'Company Intranet',
      icon: faGlobe,
      desc: 'Access internal company news, policies, and directories.',
      route: '/intranet',
    },
    {
      title: 'HR Portal',
      icon: faUsers,
      desc: 'Manage your personal information, benefits, and payroll.',
      route: '/hr-portal',
    },
    {
      title: 'IT Helpdesk',
      icon: faHeadset,
      desc: 'Submit tickets for technical issues or requests.',
      route: '/it-helpdesk',
    },
    {
      title: 'Software Downloads',
      icon: faDownload,
      desc: 'Download approved tools for your work.',
      route: '/downloads',
    },
    {
      title: 'Email Setup Guide',
      icon: faEnvelope,
      desc: 'Step-by-step guide for email setup.',
      route: '/email-setup',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">OnboardPro Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm">Hi, {user?.name || "User"}</span>
          <button
            onClick={handleLogout}
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-sm text-gray-600">Total Tasks</h2>
            <p className="text-2xl font-semibold mt-2">8</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-sm text-gray-600">Documents Submitted</h2>
            <p className="text-2xl font-semibold mt-2">3</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-sm text-gray-600">Onboarding Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">70% completed</p>
          </div>
        </div>

        {/* Core Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-50"
              onClick={() => navigate(card.route)}
            >
              <div className="flex items-center gap-4 mb-3">
                <FontAwesomeIcon icon={card.icon} className="text-blue-800 text-xl" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Activity and Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔️ You submitted ID proof</li>
              <li>📅 Meeting scheduled with HR</li>
              <li>📄 Offer letter viewed</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>🗓️ Orientation: July 25 at 10:00 AM</li>
              <li>📢 Team Intro Session: July 27</li>
              <li>💼 Project Kickoff: August 1</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
