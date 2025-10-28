import axios from "axios";
import toast from "react-hot-toast";

export const ApiURL = async (email) => {
  try {
    const fetchData = await axios.get(
      `http://localhost:4000/application?email=${email}`
    );
    console.log(fetchData.data);
    return fetchData?.data;
  } catch (err) {
    toast.error(err?.message);
    return [];
  }
};
