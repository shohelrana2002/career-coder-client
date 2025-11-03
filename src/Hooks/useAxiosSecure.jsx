import axios from "axios";
import useGetAuth from "./useGetAuth";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});
const useAxiosSecure = () => {
  const { user } = useGetAuth();
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  });
  return axiosInstance;
};

export default useAxiosSecure;
