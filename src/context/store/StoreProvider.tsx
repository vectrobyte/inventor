import React, { createContext, Dispatch, Reducer, useEffect, useReducer, useState } from 'react';

import { Action, Model } from '../../@types';
import loadingGif from '../../assets/loading.gif';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DEFAULT_STORE, Store, STORE_ACTIONS, StoreReducer } from './index';

export type StoreContextType = [Store, Dispatch<Action<STORE_ACTIONS>>];
export const StoreContext = createContext<StoreContextType | null>(null);
StoreContext.displayName = 'StoreContext';

type StoreProvider = React.HTMLAttributes<HTMLElement>;

type StoreReducer = Reducer<Store, Action<STORE_ACTIONS>>;

export const StoreProvider: React.FC<StoreProvider> = ({ children, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer<StoreReducer>(StoreReducer, DEFAULT_STORE);
  const [cachedModels] = useLocalStorage<Model[]>('models', []);

  useEffect(() => {
    setLoading(true);
    dispatch({ type: STORE_ACTIONS.setModels, payload: cachedModels });

    const storeLoaderTimeout = setTimeout(() => {
      // Simulating an api call
      dispatch({ type: STORE_ACTIONS.setIsStoreLoaded, payload: true });
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(storeLoaderTimeout);
    };
  }, [cachedModels]);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center text-center"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <img src={loadingGif} alt="Loading..." />
      </div>
    );
  }

  return (
    <StoreContext.Provider value={[state, dispatch]} {...props}>
      {state.isStoreLoaded && children}
    </StoreContext.Provider>
  );
};
