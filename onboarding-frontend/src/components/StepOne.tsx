import { useForm } from 'react-hook-form';
import { useStepContext } from '../context/StepContext';

type FormInput = {
  fullName: string;
  email: string;
};

export default function StepOne() {
  const { formData, setFormData, setStep } = useStepContext();

  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
    },
  });

  const onSubmit = (data: FormInput) => {
    setFormData(data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('fullName')}
        placeholder="Full Name"
        className="border p-2 rounded w-full"
      />
      <input
        {...register('email')}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </form>
  );
}
