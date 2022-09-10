import React, { ChangeEvent } from 'react';

type TextFieldProps = {
  label: string;
  value: string | undefined;
  onChange(val: string): void;
};

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>{label}</span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={value}
          placeholder={label}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default TextField;
