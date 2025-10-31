import React from "react";

const MyPostedTableList = ({ item, index, handleDelete }) => {
  const { title, applicationDeadline, status, _id } = item;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{title}</td>
        <td>{applicationDeadline}</td>
        <td>{status}</td>
        <td onClick={() => handleDelete(_id)} className="btn btn-dash">
          Delete
        </td>
      </tr>
    </>
  );
};

export default MyPostedTableList;
