import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();

  const fetchData = (email) => {
    return axiosSecure
      .get(`/application?email=${email}`)
      .then((res) => res.data);
  };

  const myPostedJobs = (email) => {
    return axiosSecure
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };
  return { fetchData, myPostedJobs };
};

export default useApplicationApi;
