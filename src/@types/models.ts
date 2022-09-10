export type Field = {
  id: string;
  name: string;
  data_type: unknown;
};

export type ProductField = {
  field_id: Field['id'];
  value: Field['data_type'];
};

export type Product = {
  id: string;
  data: ProductField[];
};

export type Model = {
  id: number;
  type: string;
  title: string;
  title_field: Field['id'];
  fields: Field[];
  products?: Product[];
};
