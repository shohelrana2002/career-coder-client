import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import { ApiURL } from "../../Api/ApiURL";
import useGetAuth from "../../Hooks/useGetAuth";
import Loader from "../Shared/Loader";

const MyApplication = () => {
  const { user } = useGetAuth();
  return (
    <div>
      <ApplicationStats />
      <Suspense fallback={<Loader />}>
        <ApplicationList loaderPromise={ApiURL(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplication;
