import React from 'react';
import { ToastOptions } from 'react-toastify/dist/types';

import { TOAST_OPTIONS } from '../../common/configs';

type SuccessToastProps = React.HTMLAttributes<HTMLElement>;

export const SUCCESS_TOAST_OPTIONS: ToastOptions = {
  ...TOAST_OPTIONS,
  type: 'success',
};

const SuccessToast: React.FC<SuccessToastProps> = ({ children }) => {
  return <div className="text-gray-600 flex items-start">{children}</div>;
};

export default SuccessToast;
