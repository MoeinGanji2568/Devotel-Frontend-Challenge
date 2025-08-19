import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import toast from "react-hot-toast";

interface AxiosErrorMessage {
  ErrorMessage: string[];
  status: number;
}

const baseURL: string = import.meta.env.VITE_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (err: AxiosError<AxiosErrorMessage>) => {
  if (err.response?.data.ErrorMessage) {
    err.response.data.ErrorMessage.forEach((errorMessage) => {
      toast.error(errorMessage);
    });
  } else {
    toast.error("Something went wrong!");
  }

  Promise.reject(err);
};

instance.interceptors.request.use((opt) => {
  return opt;
});
instance.interceptors.response.use(onSuccess, onError);

export default instance;
