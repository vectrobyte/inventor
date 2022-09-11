import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';

export const TOAST_OPTIONS: ToastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
  hideProgressBar: true,
  pauseOnHover: true,
};
