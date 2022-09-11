import React from 'react';
import { ToastOptions } from 'react-toastify/dist/types';

import { TOAST_OPTIONS } from '../../../common/configs';

type WarningToastProps = React.HTMLAttributes<HTMLElement>;

export const WARNING_TOAST_OPTIONS: ToastOptions = {
  ...TOAST_OPTIONS,
  type: 'warning',
};

const WarningToast: React.FC<WarningToastProps> = ({ children }) => {
  return <span className="inline text-gray-600">{children}</span>;
};

export default WarningToast;
