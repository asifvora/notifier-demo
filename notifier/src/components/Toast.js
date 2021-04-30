import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'error',
    ...options
  });
};

export const successToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'success',
    ...options
  });
};

export const infoToast = ({ content, options = {} }) => {
  if (!content) {
    return;
  }
  return toast(content, {
    type: 'info',
    ...options
  });
};

export { toast };