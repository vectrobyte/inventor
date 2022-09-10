import React, { ChangeEvent, useMemo } from 'react';

import { Field, FieldType } from '../../../@types';
import CrossButton from '../../../components/CrossButton';
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
    value: 'NUMBER',
  },
  {
    label: 'Checkbox',
    value: 'CHECKBOX',
  },
];

const FieldInput: React.FC<FieldInputProps> = ({ field, onUpdate, onDelete }) => {
  const title = useMemo(() => {
    const found = FIELD_OPTIONS.find((option) => {
      return option.value === field.type;
    });

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
          style={{ width: 'calc(100% - 115px)' }}
          onChange={handleFieldNameChange}
        />
        <select
          defaultValue={field.type}
          className="bg-gray-700 w-[115px] border border-gray-300 text-white text-sm rounded-r border-l-gray-600 border-l-2 border-r-4 border-r-gray-700 block w-full p-2.5 truncate"
          title={title}
          onChange={handleFieldTypeChange}
        >
          {FIELD_OPTIONS.map(
            (option, key) =>
              option.label && (
                <option key={`${option.value}-${key}`} value={option.value}>
                  {option.label}
                </option>
              )
          )}
        </select>
      </div>

      <CrossButton onClick={onDelete} />
    </div>
  );
};

export default FieldInput;
