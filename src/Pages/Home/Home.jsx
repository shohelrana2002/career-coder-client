import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Loader from "../Shared/Loader";
const Home = () => {
  const loaderPromise = fetch("https://career-coder-server.vercel.app/jobs")
    .then((res) => res.json())
    .catch(() => []);
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
