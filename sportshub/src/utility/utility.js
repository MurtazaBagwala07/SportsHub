import { toast } from 'react-toastify';

export const isFollowing = (arr, username) => {
    return arr?.some((ele) => ele.username === username)
}

export const toastHandler = (type, message) => {
    if (type === 'error') {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'warn') {
      toast.warn(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'success') {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'info') {
      toast.info(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };