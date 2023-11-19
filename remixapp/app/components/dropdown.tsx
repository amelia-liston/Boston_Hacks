// components/Dropdown.tsx
import React from 'react';

interface DropdownProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select onChange={handleOptionSelect} className="form-dropdown">
      <option value="" disabled>Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};
