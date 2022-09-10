export type FieldType = 'TEXT' | 'NUMBER' | 'DATE' | 'CHECKBOX';

export type Uid = string;

export type Field = {
  id: Uid;
  name: string;
  type: FieldType;
};

export type ProductField = {
  field_id: Field['id'];
  value: unknown;
};

export type Product = {
  id: Uid;
  data: {
    [key: Field['id']]: unknown;
  };
};

export type Model = {
  id: Uid;
  title: string;
  title_field: Field['id'];
  fields: Field[];
  products: Product[];
};
