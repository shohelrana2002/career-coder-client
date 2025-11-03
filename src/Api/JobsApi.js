import axios from "axios";
import toast from "react-hot-toast";

export const JobsApi = async (email) => {
  try {
    const fetchData = await axios.get(
      `https://career-coder-server.vercel.app/jobs?email=${email}`
    );
    return fetchData?.data;
  } catch (err) {
    toast.error(err?.message);
    return [];
  }
};
