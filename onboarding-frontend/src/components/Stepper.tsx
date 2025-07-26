// src/components/Stepper.tsx
import { useStepContext } from '../context/StepContext';

const Stepper = () => {
  const { currentStep } = useStepContext();

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
            currentStep >= s ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          {s}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
