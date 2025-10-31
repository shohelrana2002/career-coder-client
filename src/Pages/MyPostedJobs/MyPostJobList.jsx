import MyPostedTableList from "./MyPostedTableList";

const MyPostJobList = ({ jobs, handleDelete }) => {
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
              <th>View Application</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.length > 0 ? (
              <>
                {jobs?.map((item, index) => (
                  <MyPostedTableList
                    key={item._id}
                    handleDelete={handleDelete}
                    item={item}
                    index={index}
                  />
                ))}
              </>
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPostJobList;
