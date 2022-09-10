import React, { ChangeEvent } from 'react';

export type SelectOption = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: React.ReactNode;
};

type CheckboxProps = {
  label: string;
  value: string;
  placeholder: string;
  options: SelectOption[];
  onChange(val: string): void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, value, placeholder, options, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <label className="block mb-4">
      <span className="block text-gray-700 text-sm font-medium mb-2 mb-2 select-none">{label}</span>
      <select
        value={value}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      >
        <option selected disabled>
          {placeholder}
        </option>
        {options.map((option, key) => (
          <option key={`${option.label}-${key}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Checkbox;
