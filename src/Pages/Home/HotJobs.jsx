import { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ loaderPromise }) => {
  const jobs = use(loaderPromise);

  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-2">
      {jobs?.data?.map((job) => (
        <JobsCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default HotJobs;
