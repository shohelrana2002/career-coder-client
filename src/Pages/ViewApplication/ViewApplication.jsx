import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
  const { jobId } = useParams();
  const loader = useLoaderData();
  console.log(jobId);
  return (
    <div>
      <p> {loader.length}ViewApplication</p>
    </div>
  );
};

export default ViewApplication;
