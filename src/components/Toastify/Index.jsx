import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify() {
  return (
    <ToastContainer
      position="top-right"
      theme="dark"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
}

export { Toastify };
