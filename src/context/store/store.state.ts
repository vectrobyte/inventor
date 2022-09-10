import { Model } from '../../@types';

export type Store = {
  models: Model[];
  isStoreLoaded: boolean;
};

export const DEFAULT_STORE: Store = {
  models: [],
  isStoreLoaded: false,
};
