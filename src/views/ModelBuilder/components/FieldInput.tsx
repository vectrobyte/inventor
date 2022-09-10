import React, { ChangeEvent, useMemo } from 'react';

import { Field, FieldType } from '../../../@types';
import { SelectOption } from '../../../components/form/Select';

type FieldInputProps = {
  field: Field;
  onUpdate(field: Field): void;
  onDelete(): void;
};

export type FieldOption = SelectOption<FieldType>;

export const FIELD_OPTIONS: FieldOption[] = [
  {
    label: 'Text',
    value: 'TEXT',
  },
  {
    label: 'Date',
    value: 'DATE',
  },
  {
    label: 'Number',
    value: 'TEXT',
  },
  {
    label: 'Checkbox',
    value: 'CHECKBOX',
  },
];

const FieldInput: React.FC<FieldInputProps> = ({ field, onUpdate, onDelete }) => {
  const title = useMemo(() => {
    const found = FIELD_OPTIONS.find((option) => option.value === field.type);

    return ((found && found.label) as string) || '';
  }, [field.type]);

  const handleFieldNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate({
      ...field,
      name: e.target.value,
    });
  };

  const handleFieldTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onUpdate({
      ...field,
      type: e.target.value as FieldType,
    });
  };

  return (
    <div className="flex mb-4 items-center">
      <div className="flex mr-1">
        <input
          type="text"
          value={field.name}
          placeholder="Field Name"
          className="flex-shrink-0 z-10 py-2.5 px-4 text-sm font-medium text-gray-700 border border-gray-300 rounded-l focus:ring-4 focus:outline-none focus:ring-gray-100"
          style={{ width: 'calc(100% - 110px)' }}
          onChange={handleFieldNameChange}
        />
        <select
          value={field.type}
          className="bg-gray-50 w-[110px] border border-gray-300 text-gray-900 text-sm rounded-r border-l-gray-100 border-l-2 block w-full p-2.5 truncate"
          title={title}
          onChange={handleFieldTypeChange}
        >
          {FIELD_OPTIONS.map((option, key) => (
            <option key={`${option.value}-${key}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-0.5 -mr-2 inline-flex items-center transition-colors"
        onClick={onDelete}
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FieldInput;
