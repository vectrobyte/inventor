import React, { ChangeEvent } from 'react';

import { FormControl } from '../../@types';

type TextFieldProps = FormControl<string>;

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(e.target.value);
  };

  return (
    <label className="block">
      <span className="block text-gray-700 text-sm font-medium mb-2 mb-2 select-none">{label}</span>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={value}
        placeholder={label}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextField;
