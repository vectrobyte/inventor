import React from 'react';

import { FieldType } from '../../../../../@types';
import Dropdown from '../../../../../components/Dropdown';
import { FIELD_OPTIONS, FieldOption } from './FieldInput';

type AddFieldDropdownProps = {
  onSelect(type: FieldType): void;
};

const AddFieldDropdown: React.FC<AddFieldDropdownProps> = ({ onSelect }) => {
  const handleSelect = (option: FieldOption) => {
    onSelect(option.value);
  };

  const mapOptions = (option: FieldOption) => option.label;

  return (
    <Dropdown
      label="Add Field"
      options={FIELD_OPTIONS}
      optionMapper={mapOptions}
      onSelect={handleSelect}
    />
  );
};

export default AddFieldDropdown;
