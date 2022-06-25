// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";

function useNotify() {
  const notify = (type, val) => {
    switch (type) {
      case "warning":
        return toast.warning(val);
      case "success":
        return toast.success(val);
      case "info":
        return toast.info(val);
      case "error":
        return toast.error(val);
      default:
        return toast(val);
    }
  };
  return { notify };
}

export default useNotify;
