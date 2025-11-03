import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useGetAuth from "../../Hooks/useGetAuth";
import Loader from "../Shared/Loader";
import useApplicationApi from "../../Hooks/useApplicationApi";

const MyApplication = () => {
  const { user, loading } = useGetAuth();
  const { fetchData } = useApplicationApi();
  if (loading || !user?.email) return <Loader />;
  return (
    <div>
      <ApplicationStats />
      <Suspense fallback={<Loader />}>
        <ApplicationList loaderPromise={fetchData(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplication;
