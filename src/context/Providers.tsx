import React from 'react';

import { StoreProvider } from './store/StoreProvider';

type ProvidersProps = React.HTMLAttributes<HTMLElement>;

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
