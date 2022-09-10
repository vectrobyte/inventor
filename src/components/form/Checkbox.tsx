import React, { ChangeEvent } from 'react';

import { FormControl } from '../../@types';

type CheckboxProps = FormControl<boolean>;

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Boolean(e.target.checked));
  };

  return (
    <label className="block flex items-center">
      <input
        type="checkbox"
        checked={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChange}
      />
      <span className="ml-2 text-gray-700 text-sm font-medium select-none">{label}</span>
    </label>
  );
};

export default Checkbox;
