import React, { use, useEffect, useState } from "react";
import JobApplicationRow from "./JobApplicationRow";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";

const ApplicationList = ({ loaderPromise }) => {
  const jobs = use(loaderPromise);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jobs || []);
  }, [jobs]);
  const handelDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      await axios.delete(`http://localhost:4000/application/${id}`);
      toast.success("Delete Applied successfully");
      setData((prev) => prev.filter((item) => item._id !== id));
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-xl font-medium">Name</th>
              <th className="text-xl font-medium">Title</th>
              <th className="text-xl font-medium">Email</th>
              <th className="text-xl font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((item, index) => (
              <JobApplicationRow
                key={item._id}
                handelDelete={handelDelete}
                item={item}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
