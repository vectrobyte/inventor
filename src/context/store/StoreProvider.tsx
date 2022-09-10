import React, { createContext, Dispatch, Reducer, useEffect, useReducer } from 'react';

import { Action, Model } from '../../@types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DEFAULT_STORE, Store, STORE_ACTIONS, StoreReducer } from './index';

export type StoreContextType = [Store, Dispatch<Action<STORE_ACTIONS>>];
export const StoreContext = createContext<StoreContextType | null>(null);
StoreContext.displayName = 'StoreContext';

type StoreProvider = React.HTMLAttributes<HTMLElement>;

type StoreReducer = Reducer<Store, Action<STORE_ACTIONS>>;

export const StoreProvider: React.FC<StoreProvider> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer<StoreReducer>(StoreReducer, DEFAULT_STORE);
  const [cachedModels] = useLocalStorage<Model[]>('models', []);

  useEffect(() => {
    dispatch({ type: STORE_ACTIONS.setModels, payload: cachedModels });
  }, [cachedModels]);

  return (
    <StoreContext.Provider value={[state, dispatch]} {...props}>
      {children}
    </StoreContext.Provider>
  );
};
