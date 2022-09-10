import React, { useMemo } from 'react';

import { Model } from '../../../@types';
import CrossButton from '../../../components/buttons/CrossButton';
import Select, { SelectOption } from '../../../components/form/Select';
import TextField from '../../../components/form/TextField';
import { useModelFields } from '../../../hooks/data/useModelFields';
import AddFieldDropdown from './AddFieldDropdown';
import FieldInput from './FieldInput';

type ModelCardProps = React.HTMLAttributes<HTMLElement> & {
  model: Model;
  onDelete(model: Model): void;
};

const ModelCard: React.FC<ModelCardProps> = ({ model, onDelete }) => {
  const { fields, addField, updateField, deleteField, handleUpdateModel } = useModelFields(model);

  const titleOptions = useMemo<SelectOption[]>(
    () =>
      fields
        .map(({ name, type }) => ({
          label: name,
          value: type,
        }))
        .filter(({ label }) => label && label.length),
    [fields]
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="bg-gray-800 py-4 md:px-6 lg:px-8 min-h-[56px] rounded-t-lg text-white flex items-center justify-between">
        <span>{model.title}</span>
        <CrossButton onClick={() => onDelete(model)} />
      </div>

      <form className="space-y-4 p-4 md:p-6 lg:p-8" action="#">
        <TextField
          label="Model Name"
          value={model.title}
          onChange={(val) => handleUpdateModel('title', val)}
        />
        <Select
          label="Title Field"
          value={model.title_field}
          placeholder="Select title field"
          options={titleOptions}
          onChange={(val) => handleUpdateModel('title_field', val)}
        />

        <p>Fields</p>

        {fields.map((field, key) => (
          <FieldInput
            key={`${field.id}-${key}`}
            field={field}
            onUpdate={updateField}
            onDelete={() => deleteField(field)}
          />
        ))}

        <AddFieldDropdown onSelect={addField} />
      </form>
    </div>
  );
};

export default ModelCard;
