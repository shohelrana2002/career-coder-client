const JobApplicationRow = ({ item, index, handelDelete }) => {
  const { company, company_logo, title, email, _id } = item;

  return (
    <>
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={company_logo} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>{company}</td>
        <td>{email}</td>
        <th>
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-warning text-xs "
          >
            Delete App..
          </button>
        </th>
      </tr>
    </>
  );
};

export default JobApplicationRow;
