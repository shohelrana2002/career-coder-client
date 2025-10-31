import { Link, useLoaderData, useNavigate } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  const job = data?.data || {};
  console.log(job);
  const {
    title,
    company,
    company_logo,
    category,
    description,
    requirements,
    responsibilities,
    salaryRange,
    location,
    hr_email,
    hr_name,
    jobType,
    applicationDeadline,
    status,
    _id,
  } = job;
  const navigate = useNavigate();
  return (
    <div className="  from-indigo-50 via-blue-50 to-indigo-100 py-16 px-4">
      <button className="btn btn-outline mx-3" onClick={() => navigate(-1)}>
        Back To page
      </button>
      <div className="container mx-auto  backdrop-blur-md  rounded-3xl border border-gray-200 p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <img
            src={company_logo}
            alt={company}
            className="w-32 h-32 object-contain rounded-2xl border p-3 bg-white shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
            <p className="text-lg text-gray-500 font-medium mt-1">{company}</p>
            <span className="inline-block mt-3 px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Job Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Job Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            {description}
          </p>
        </section>

        <div className="grid md:grid-cols-2">
          {/* Responsibilities */}
          {responsibilities?.length > 0 && (
            <section className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🔹 Responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {requirements?.length > 0 && (
            <section className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                ✅ Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                {requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 text-gray-700">
          <div className="space-y-3">
            <p>
              <span className="font-semibold">💼 Job Type:</span> {jobType}
            </p>
            <p>
              <span className="font-semibold">📍 Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">📅 Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">💰 Salary:</span>{" "}
              {salaryRange?.min} – {salaryRange?.max} BDT
            </p>
            <p>
              <span className="font-semibold">📧 HR Email:</span> {hr_email}
            </p>
            <p>
              <span className="font-semibold">👨‍💼 HR Name:</span> {hr_name}
            </p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-12 text-center">
          <Link
            to={`/jobApply/${_id}`}
            className="btn btn-primary transform hover:scale-105"
          >
            Apply Now🚀
          </Link>
        </div>

        {/* Job Status */}
        <p className="text-center mt-6 text-sm text-gray-500">
          Job Status:{" "}
          <span
            className={`font-medium ${
              status === "active" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status?.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
