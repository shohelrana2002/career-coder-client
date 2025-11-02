import axios from "axios";
import toast from "react-hot-toast";

export const ApiURL = async (email, accessToken) => {
  try {
    const fetchData = await axios.get(
      `http://localhost:4000/application?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return fetchData?.data;
  } catch (err) {
    toast.error(err?.message);

    return [];
  }
};
