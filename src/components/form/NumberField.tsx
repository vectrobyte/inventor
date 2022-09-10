import React, { ChangeEvent } from 'react';

type NumberFieldProps = {
  label: string;
  value: number | undefined;
  onChange(val: number): void;
};

const NumberField: React.FC<NumberFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(Number(e.target.value));
  };

  return (
    <label className="mb-4">
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
