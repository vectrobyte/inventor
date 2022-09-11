import React from 'react';

import ToastContainerWrapper from '../components/toasts/ToastContainer';
import { StoreProvider } from './store/StoreProvider';

type ProvidersProps = React.HTMLAttributes<HTMLElement>;

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <ToastContainerWrapper />
      {children}
    </StoreProvider>
  );
};
