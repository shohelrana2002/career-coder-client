import { Suspense, useEffect, useState } from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import Loader from "../Shared/Loader";
import MyPostJobList from "./MyPostJobList";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const { user, loading } = useGetAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (!user?.email) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/jobs/applications?email=${user.email}`,
          {
            withCredentials: true,
          }
        );
        setJobs(res?.data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user?.email]);

  const handleDelete = async (id) => {
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
      await axios.delete(`http://localhost:4000/jobs/${id}`).then((res) => {
        if (res?.data?.acknowledged) {
          toast.success("Deleted Successfully");
          setJobs((prev) => prev.filter((job) => job._id !== id));
        }
      });
    }
  };
  if (loading) return <Loader />;
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <MyPostJobList handleDelete={handleDelete} jobs={jobs} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
