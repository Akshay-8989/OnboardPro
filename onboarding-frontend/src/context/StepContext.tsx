import React, { createContext, useContext, useState} from 'react';
import type {ReactNode} from 'react';

type FormData = {
  fullName: string;
  email: string;
  role: string;
  department: string;
  goal?: string;
};

type StepContextType = {
  currentStep: number;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  setStep: (step: number) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, updateFormData] = useState<FormData>({
    fullName: '',
    email: '',
    role: '',
    department: '',
  });

  const setFormData = (data: Partial<FormData>) => {
    updateFormData(prev => ({ ...prev, ...data }));
  };

  const setStep = (step: number) => setCurrentStep(step);

  return (
    <StepContext.Provider value={{ currentStep, formData, setFormData, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStepContext must be used within a StepProvider");
  return context;
};
