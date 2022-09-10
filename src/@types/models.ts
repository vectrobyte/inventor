export type Field = {
  id: string;
  name: string;
  type: 'TEXT' | 'NUMBER' | 'DATE' | 'CHECKBOX';
};

export type ProductField = {
  field_id: Field['id'];
  value: unknown;
};

export type Product = {
  id: string;
  data: ProductField[];
};

export type Model = {
  id: number;
  title: string;
  title_field: Field['id'];
  fields: Field[];
  products?: Product[];
};
