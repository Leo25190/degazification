import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to show a loading toast
const showLoadingToast = (message: string) => {
    return toast.loading(message, {
        isLoading: true,
        autoClose: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

// Function to update the toast with a success or error message
const updateToast = (toastId: string, message: string, type: "success" | "error", options?: ToastOptions) => {
    toast.update(toastId, {
        render: message,
        type,
        isLoading: false, // Set loading to false
        autoClose: 3000, // Auto close after 3 seconds
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        ...options,
    });
};

export { showLoadingToast, updateToast };
