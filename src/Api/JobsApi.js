import axios from "axios";
import toast from "react-hot-toast";

export const JobsApi = async (email) => {
  try {
    const fetchData = await axios.get(
      `http://localhost:4000/jobs?email=${email}`
    );
    return fetchData?.data;
  } catch (err) {
    toast.error(err?.message);
    return [];
  }
};
