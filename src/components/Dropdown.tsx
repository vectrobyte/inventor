import React, { useState } from 'react';

type DropdownProps = {
  label: string;
  options: any[];
  optionMapper(option: any): string;
  onSelect(val: any): void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, optionMapper, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (option: any) => {
    onSelect(option);
    setExpanded(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="text-white w-full bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 font-medium rounded text-sm px-4 py-2.5"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="w-full flex items-center justify-between">
          <span>{label}</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`z-10 border absolute w-full bg-white rounded divide-y divide-gray-100 shadow-lg ${
          expanded ? 'block' : 'hidden'
        }`}
      >
        <ul className="py-1 text-sm text-gray-700">
          {options.map((option, key) => (
            <li key={`${option.toString()}-${key}`}>
              <button
                type="button"
                className="w-full block py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {optionMapper(option)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
