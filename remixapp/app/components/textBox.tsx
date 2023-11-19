// components/FormInput.tsx
import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextBox: React.FC<FormInputProps> = ({ type, placeholder, onChange }) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} className="form"/>;
};
