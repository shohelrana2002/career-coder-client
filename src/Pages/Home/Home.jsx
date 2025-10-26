import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Loader from "../Shared/Loader";
const Home = () => {
  const loaderPromise = fetch("http://localhost:4000/jobs").then((res) =>
    res.json()
  );
  return (
    <>
      <Banner />
      <Suspense fallback={<Loader />}>
        <HotJobs loaderPromise={loaderPromise} />
      </Suspense>
    </>
  );
};

export default Home;
