import axios from "axios";
import useGetAuth from "./useGetAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const axiosInstance = axios.create({
  baseURL: "https://career-coder-server.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, handleSignOut } = useGetAuth();
  axiosInstance.interceptors.request.use((config) => {
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user?.accessToken}`;
    }
    return config;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        handleSignOut()
          .then(() => {
            return navigate("/login");
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
