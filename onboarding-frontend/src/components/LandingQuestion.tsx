// src/components/LandingQuestion.tsx
import { useStepContext } from '../context/StepContext';
import { FaUserTie, FaUsers, FaCogs } from 'react-icons/fa';

export default function LandingQuestion() {
  const { setStep, setFormData } = useStepContext();

  const handleChoice = (goal: string) => {
    setFormData({ goal });
    setStep(0); // Go to StepOne directly
  };

  const options = [
    { label: 'New employee setup', icon: <FaUserTie className="mr-2" /> },
    { label: 'Add team roles', icon: <FaUsers className="mr-2" /> },
    { label: 'Manage access', icon: <FaCogs className="mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white flex flex-col items-center justify-center p-6 font-inter">
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to OnboardFlow</h1>
        <p className="text-lg text-white/80">
          Streamline your employee onboarding in minutes with our guided setup assistant.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-xl w-full shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-white">What brings you here today?</h2>
        <div className="grid grid-cols-1 gap-4">
          {options.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => handleChoice(label)}
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-tr from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-medium shadow-md transition"
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 text-white/70 text-sm">
        <p>Trusted by 100+ HR teams worldwide 🚀</p>
        <p className="mt-1">Need help? <span className="underline cursor-pointer">Contact support</span></p>
      </div>
    </div>
  );
}
