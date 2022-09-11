import { omit } from 'lodash';

import { Field, FieldType, Model } from '../../@types';
import { uid } from '../../common/helpers';
import { useModels } from './useModels';

export const useModelFields = (model: Model) => {
  const { fields } = model;
  const { updateModel, models, setModels } = useModels();

  const handleUpdateModel = (key: keyof Model, value: any) => {
    updateModel({
      ...model,
      [key]: value,
    });
  };

  const addField = (type: FieldType) => {
    handleUpdateModel('fields', [
      ...fields,
      {
        id: uid(),
        name: '',
        type,
      },
    ]);
  };

  const updateField = (updatedField: Field) => {
    handleUpdateModel(
      'fields',
      fields.map((field) => (updatedField.id === field.id ? updatedField : field))
    );
  };

  const deleteField = (deletedField: Field) => {
    setModels(
      models.map((model) => ({
        ...model,
        fields: fields.filter((field) => deletedField.id !== field.id),
        products: model.products.map((product) => {
          return {
            ...product,
            formData: omit(product.formData, deletedField.id),
          };
        }),
      }))
    );
  };

  return {
    fields,
    addField,
    updateField,
    deleteField,
    handleUpdateModel,
  };
};
