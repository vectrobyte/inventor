import { Model, Product } from '../../@types';

export type Store = {
  models: Model[];
  products: Product[];
};

export const DEFAULT_STORE: Store = {
  models: [],
  products: [],
};
