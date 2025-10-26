import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
const JobsCard = ({ job }) => {
  const {
    category,
    company_logo,
    description,
    salaryRange,
    requirements,
    location,
    _id,
  } = job;

  return (
    <>
      <div className="card bg-base-200 drop-shadow-xl">
        <div className="flex justify-center p-4 items-center gap-4">
          <div>
            <figure>
              <img src={company_logo} alt="Shoes" />
            </figure>
          </div>
          <div>
            <h2 className="text-2xl">company</h2>
            <p className="flex items-center">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {category}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <p className="text-primary font-semibold text-xl">
            <span className="text-secondary"> Salary:</span> {salaryRange?.min}-
            {salaryRange?.max} {salaryRange?.currency}
          </p>
          <div className="card-actions ">
            {requirements?.map((req, index) => (
              <button className="btn text-secondary font-semibold" key={index}>
                {req}
              </button>
            ))}
          </div>
          <div className="card-actions justify-center">
            <Link to={`/jobs/${_id}`} className="btn-primary btn">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
