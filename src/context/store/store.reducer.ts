import { Action } from '../../@types';
import { STORE_ACTIONS } from './store.actions';
import { Store } from './store.state';

export const StoreReducer = (state: Store, { type, payload }: Action<STORE_ACTIONS>): Store => {
  switch (type) {
    case STORE_ACTIONS.setModels: {
      return {
        ...state,
        models: payload,
      };
    }
    case STORE_ACTIONS.setProducts: {
      return {
        ...state,
        products: payload,
      };
    }
    default:
      throw new Error('Invalid store action ');
  }
};
