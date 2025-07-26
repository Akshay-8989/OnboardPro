import { useStepContext } from '../context/StepContext';

export default function StepThree() {
  const { formData, setStep } = useStepContext();

  const handleSubmit = () => {
    console.log('Final Submission:', formData);
    setStep(4); // Go to success page
  };

  const goBack = () => setStep(2);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Review Details</h2>
      <div className="border p-4 rounded space-y-2 bg-gray-50">
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Role:</strong> {formData.role}</p>
        <p><strong>Department:</strong> {formData.department}</p>
      </div>

      <div className="flex justify-between">
        <button onClick={goBack} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
