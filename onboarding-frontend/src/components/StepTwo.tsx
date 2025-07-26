import { useForm } from 'react-hook-form';
import { useStepContext } from '../context/StepContext';

type FormInput = {
  role: string;
  department: string;
};

export default function StepTwo() {
  const { formData, setFormData, setStep } = useStepContext();

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      role: formData.role,
      department: formData.department,
    },
  });

  const onSubmit = (data: FormInput) => {
    setFormData(data);
    setStep(3);
  };

  const goBack = () => setStep(1);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('role')}
        placeholder="Role (e.g., Developer)"
        className="border p-2 rounded w-full"
      />
      <input
        {...register('department')}
        placeholder="Department (e.g., Engineering)"
        className="border p-2 rounded w-full"
      />

      <div className="flex justify-between">
        <button type="button" onClick={goBack} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
}
