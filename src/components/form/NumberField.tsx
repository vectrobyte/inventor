import React, { ChangeEvent } from 'react';

import { FormControl } from '../../@types';

type NumberFieldProps = FormControl<number>;

const NumberField: React.FC<NumberFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(Number(e.target.value));
  };

  return (
    <label className="block">
      <span className="block text-gray-700 text-sm font-medium mb-2 mb-2 select-none">{label}</span>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        value={value}
        placeholder={label}
        onChange={handleChange}
      />
    </label>
  );
};

export default NumberField;
