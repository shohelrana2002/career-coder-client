import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";

const ViewApplication = () => {
  const navigate = useNavigate();
  const applications = useLoaderData();
  const handleStatus = async (e, application_id) => {
    const status = e.target.value;
    await axios
      .patch(
        `https://career-coder-server.vercel.app/application/${application_id}`,
        { status }
      )
      .then((res) => {
        if (res?.data?.modifiedCount) {
          toast.success("Status Updated Success");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <div>
      <p className="flex text-xl font-semibold justify-center mx-auto my-8">
        {applications.length} Applied For This jobs
      </p>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, i) => (
              <tr key={application._id}>
                <th>{i + 1}</th>
                <td>{application.email}</td>
                <td>
                  <select
                    onChangeCapture={(e) => handleStatus(e, application._id)}
                    defaultValue="Pick a status Change"
                    className="select bg-base-200"
                  >
                    <option defaultValue={application?.status}>
                      {application.status}
                    </option>
                    <option value={"interView"}>InterView</option>
                    <option value={"expired"}>Expired</option>
                    <option value={"active"}>Active</option>
                    <option value={"hired"}>Hired</option>
                    <option value={"rejected"}>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex  justify-center items-center my-5">
        <button className="btn btn-soft" onClick={() => navigate(-1)}>
          Back to Page
        </button>
      </div>
    </div>
  );
};

export default ViewApplication;
