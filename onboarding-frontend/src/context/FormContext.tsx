import React, { createContext, useState, useEffect, useContext } from 'react';

export type FormDataType = {
  name: string;
  email: string;
  role: string;
  department: string;
};

const defaultData: FormDataType = {
  name: '',
  email: '',
  role: '',
  department: '',
};

const FormContext = createContext<{
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}>({
  formData: defaultData,
  setFormData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormDataType>(() => {
    const stored = localStorage.getItem('formData');
    return stored ? JSON.parse(stored) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
