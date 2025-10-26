import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useGetAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useGetAuth;
