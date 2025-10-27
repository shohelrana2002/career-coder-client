import React from "react";
import useGetAuth from "../Hooks/useGetAuth";

import Loader from "../Pages/Shared/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useGetAuth();
  const location = useLocation();

  if (loading) return <Loader />;
  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname} replace />;
  }
  return children;
};

export default PrivateRoute;
