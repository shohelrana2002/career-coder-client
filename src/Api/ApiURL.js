import axios from "axios";
import toast from "react-hot-toast";

export const ApiURL = async (email, accessToken) => {
  // not use
  try {
    const fetchData = await axios.get(
      `https://career-coder-server.vercel.app/application?email=${email}`,
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
