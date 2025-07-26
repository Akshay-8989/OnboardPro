import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaUserCheck, FaUsers, FaHeadset, FaShieldAlt } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-indigo-950 to-blue-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
  <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 animate-fade-in-down leading-tight">
    Welcome to <span className="text-yellow-400">OnboardPro</span>
  </h1>
  <p className="text-lg sm:text-xl max-w-3xl text-gray-200 mb-10 animate-fade-in-up">
    Streamline employee onboarding, manage company resources, and monitor tasks — all from a single platform designed for modern, growing teams.
  </p>

  <button
    onClick={() => navigate("/login")}
    className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
  >
    Get Started
  </button>

  
</section>


      {/* About Section */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-r from-blue-950 to-indigo-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What is OnboardPro?</h2>
          <p className="text-lg text-gray-300 mb-6">
            OnboardPro simplifies employee onboarding, task management, and internal collaboration. Whether you're hiring a new team member, managing IT support, or rolling out HR policies — we bring it all together in one platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FaUserCheck size={30} />}
              title="Onboarding Tracker"
              desc="Assign tasks, track completion, and set role-based checklists to streamline new employee onboarding."
            />
            <FeatureCard
              icon={<FaUsers size={30} />}
              title="Team Collaboration"
              desc="Internal communications, announcements, and team-specific updates in one secure place."
            />
            <FeatureCard
              icon={<FaHeadset size={30} />}
              title="IT & HR Access Tools"
              desc="Give users quick access to the Helpdesk, HR resources, and company-wide tools like VPN or payroll portals."
            />
            <FeatureCard
              icon={<FaShieldAlt size={30} />}
              title="Secure Workspace"
              desc="Role-based access, encrypted data, and GDPR-compliant policies ensure safe onboarding and task management."
            />
          </div>
        </div>
      </section>
      

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-900 to-blue-900">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline onboarding?</h2>
        <p className="text-gray-300 mb-6">Get started now and simplify how your company welcomes new talent.</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="bg-indigo-800 bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-2xl transition-all">
    <div className="text-yellow-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{desc}</p>
  </div>
);

export default LandingPage;
