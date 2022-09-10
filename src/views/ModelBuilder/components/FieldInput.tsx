import React, { ChangeEvent, useMemo } from 'react';

import { Field } from '../../../@types';
import { SelectOption } from '../../../components/form/Select';

type FieldInputProps = {
  field: Field;
  onUpdate(field: Field): void;
};

const FIELD_OPTIONS: SelectOption<Field['type']>[] = [
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

const FieldInput: React.FC<FieldInputProps> = ({ field, onUpdate }) => {
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
      type: e.target.value as Field['type'],
    });
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={field.name}
        placeholder="Field Name"
        className="flex-shrink-0 z-10 py-2.5 px-4 text-sm font-medium text-gray-500 border border-gray-300 rounded-l focus:ring-4 focus:outline-none focus:ring-gray-100"
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
  );
};

export default FieldInput;
