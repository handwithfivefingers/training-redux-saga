import { toast } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message } = this.error);
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};

export const toastinfo = (err) => {
  let message = null;
  if (typeof err !== 'object' && err.length > 0) {
    message = err;
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.info(message);
  }
};
export const toastwarning = (err) => {
  let message = null;
  if (typeof err !== 'object' && err.length > 0) {
    message = err;
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.warning(message);
  }
};
