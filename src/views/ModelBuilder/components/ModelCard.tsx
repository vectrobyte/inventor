import React, { useMemo } from 'react';

import { Field, Model } from '../../../@types';
import Select, { SelectOption } from '../../../components/form/Select';
import TextField from '../../../components/form/TextField';
import FieldInput from './FieldInput';

type ModelCardProps = React.HTMLAttributes<HTMLElement> & {
  model: Model;
  onUpdate(model: Model): void;
};

const ModelCard: React.FC<ModelCardProps> = ({ model, onUpdate }) => {
  const { fields } = model;

  const titleOptions = useMemo<SelectOption[]>(
    () =>
      fields.map((field) => ({
        label: field.name,
        value: field.type,
      })),
    [model.fields]
  );

  const handleChange = (key: keyof Model, value: string) => {
    onUpdate({
      ...model,
      [key]: value,
    });
  };

  const handleFieldUpdate = (updatedField: Field) => {
    onUpdate({
      ...model,
      fields: fields.map((field) => (updatedField.id === field.id ? updatedField : field)),
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md">
      <div className="bg-gray-800 py-4 md:px-6 lg:px-8 min-h-[56px] text-white">{model.title}</div>

      <form className="space-y-4 p-4 md:p-6 lg:p-8" action="#">
        <TextField
          label="Model Name"
          value={model.title}
          onChange={(val) => handleChange('title', val)}
        />
        <Select
          label="Title Field"
          value={model.title_field}
          placeholder="Select a title field"
          options={titleOptions}
          onChange={(val) => handleChange('title_field', val)}
        />

        <p>Fields</p>

        {fields.map((field, key) => (
          <FieldInput key={`${field.id}-${key}`} field={field} onUpdate={handleFieldUpdate} />
        ))}
      </form>
    </div>
  );
};

export default ModelCard;
