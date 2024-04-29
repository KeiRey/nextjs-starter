import Swal from 'sweetalert2';

const ToastAlert = {
  info: (message) => {
    Swal.fire({
      icon: 'info',
      text: message,
      toast: true,
      position: 'top-end',
      timer: 3000, 
      showConfirmButton: false,
    });
  },

  success: (message) => {
    Swal.fire({
      icon: 'success',
      text: message,
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false,
    });
  },

  error: (message) => {
    Swal.fire({
      icon: 'error',
      text: message,
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false,
    });
  },
};

export default ToastAlert;
