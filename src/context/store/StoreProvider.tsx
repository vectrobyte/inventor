import React, { createContext, Dispatch, Reducer, useReducer } from 'react';

import { Action } from '../../@types';
import { DEFAULT_STORE, Store, STORE_ACTIONS, StoreReducer } from './index';

export type StoreContextType = [Store, Dispatch<Action<STORE_ACTIONS>>];
export const StoreContext = createContext<StoreContextType | null>(null);
StoreContext.displayName = 'StoreContext';

type StoreProvider = React.HTMLAttributes<HTMLElement>;

type StoreReducer = Reducer<Store, Action<STORE_ACTIONS>>;

export const StoreProvider: React.FC<StoreProvider> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer<StoreReducer>(StoreReducer, DEFAULT_STORE);

  return (
    <StoreContext.Provider value={[state, dispatch]} {...props}>
      {children}
    </StoreContext.Provider>
  );
};
