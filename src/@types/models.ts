export const FIELD_TYPES = ['TEXT', 'NUMBER', 'DATE', 'CHECKBOX'] as const;

export type FieldType = typeof FIELD_TYPES[number];

export type Uid = string;

export type Field = {
  id: Uid;
  name: string;
  type: FieldType;
};

export type Product = {
  id: Uid;
  formData: {
    [key: Field['id']]: unknown;
  };
  model?: Model;
};

export type Model = {
  id: Uid;
  title: string;
  title_field: Field['id'];
  fields: Field[];
  products: Product[];
};
