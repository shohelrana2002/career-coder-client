import React, { use } from "react";
import MyPostedTableList from "./MyPostedTableList";

const MyPostJobList = ({ JobsApi, handleDelete }) => {
  const data = use(JobsApi);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, index) => (
              <MyPostedTableList
                key={item._id}
                handleDelete={handleDelete}
                item={item}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPostJobList;
