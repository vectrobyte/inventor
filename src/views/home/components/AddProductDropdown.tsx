import React from 'react';

import { Model } from '../../../@types';
import Dropdown from '../../../components/Dropdown';

type AddProductDropdownProps = {
  models: Model[];
  onSelect(type: Model): void;
};

const AddProductDropdown: React.FC<AddProductDropdownProps> = ({ models, onSelect }) => {
  const handleSelect = (model: Model) => {
    onSelect(model);
  };

  const mapOptions = (model: Model) => model.title;

  return (
    <Dropdown
      label="Add New Product"
      options={models}
      optionMapper={mapOptions}
      onSelect={handleSelect}
    />
  );
};

export default AddProductDropdown;
