import { Suspense } from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import Loader from "../Shared/Loader";
import MyPostJobList from "./MyPostJobList";
import { JobsApi } from "../../Api/JobsApi";

const MyPostedJobs = () => {
  const { user } = useGetAuth();
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <MyPostJobList
          handleDelete={handleDelete}
          JobsApi={JobsApi(user?.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
