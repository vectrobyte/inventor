import React, { ChangeEvent } from 'react';

import { FormControl } from '../../@types';

export type SelectOption<T = any> = {
  label: React.ReactNode;
  value: T;
};

type CheckboxProps = FormControl<string> & {
  options: SelectOption[];
};

const Checkbox: React.FC<CheckboxProps> = ({ label, value, placeholder, options, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <label className="block">
      <span className="block text-gray-700 text-sm font-medium mb-2 mb-2 select-none">{label}</span>
      <select
        value={value}
        className="rounded w-full shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
