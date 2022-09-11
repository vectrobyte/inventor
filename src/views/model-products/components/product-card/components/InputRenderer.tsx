import React, { useMemo } from 'react';

import { Field, FormControl } from '../../../../../@types';
import Checkbox from '../../../../../components/form/Checkbox';
import DateField from '../../../../../components/form/DateField';
import NumberField from '../../../../../components/form/NumberField';
import TextField from '../../../../../components/form/TextField';

type InputRendererProps = Omit<FormControl<any>, 'label'> & {
  fields: Field[];
  fieldKey: Field['id'];
};

const InputRenderer: React.FC<InputRendererProps> = ({ value, fields, fieldKey, onChange }) => {
  const targetField = useMemo(
    () => fields.find((field) => field.id === fieldKey),
    [fieldKey, fields]
  );

  if (!targetField || !targetField.id) {
    return <></>;
  }

  if (targetField.type === 'TEXT') {
    return <TextField label={targetField.name} value={value} onChange={onChange} />;
  }
  if (targetField.type === 'NUMBER') {
    return <NumberField label={targetField.name} value={value} onChange={onChange} />;
  }
  if (targetField.type === 'DATE') {
    return <DateField label={targetField.name} value={value} onChange={onChange} />;
  }
  if (targetField.type === 'CHECKBOX') {
    return <Checkbox label={targetField.name} value={value} onChange={onChange} />;
  }

  return <></>;
};

export default InputRenderer;
