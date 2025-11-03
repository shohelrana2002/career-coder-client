import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useGetAuth from "../../Hooks/useGetAuth";

const AddJob = () => {
  const { user } = useGetAuth();
  const [loading, setLoading] = useState(false);
  const [requirement, setRequirement] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [responsibility, setResponsibility] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  // Add / Remove Requirement
  const addRequirement = () => {
    if (requirement.trim() === "") return;
    setRequirements([...requirements, requirement.trim()]);
    setRequirement("");
  };
  //   remove for index data in array
  const removeRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  // Add / Remove Responsibility
  const addResponsibility = () => {
    if (responsibility.trim() === "") return;
    setResponsibilities([...responsibilities, responsibility.trim()]);
    setResponsibility("");
  };
  const removeResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const salaryRange = {
      min: data.minSalary,
      max: data.maxSalary,
      currency: data.currency,
    };

    const convertData = {
      ...data,
      requirements,
      responsibilities,
      salaryRange,
    };
    try {
      await axios
        .post("https://career-coder-server.vercel.app/jobs", convertData)
        .then((res) => {
          if (res?.data?.insertedId) {
            toast.success("Job Add Successfully");
          }
        });
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Post a Job</h2>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="title"
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Job Location"
            className="input input-bordered w-full"
            required
          />
          <input
            name="category"
            type="text"
            placeholder="Category"
            className="input input-bordered w-full"
            required
          />
          <select
            name="jobType"
            className="select select-bordered w-full"
            required
          >
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>
          <input
            name="applicationDeadline"
            type="date"
            className="input input-bordered w-full"
            required
          />
          <input
            name="company"
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Salary Range */}
        <h3 className="font-bold text-lg">Salary Range</h3>
        <div className="grid grid-cols-3 gap-3">
          <input
            name="minSalary"
            type="number"
            placeholder="Min Salary"
            className="input input-bordered"
            required
          />
          <input
            name="maxSalary"
            type="number"
            placeholder="Max Salary"
            className="input input-bordered"
            required
          />
          <select name="currency" className="select select-bordered" required>
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          rows={4}
          className="textarea textarea-bordered w-full"
          required
        />

        {/* Requirements */}
        <div>
          <h3 className="font-bold text-lg mb-2">Requirements</h3>
          <div className="flex gap-2">
            <input
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              placeholder="Requirement"
              className="input input-bordered w-full"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={addRequirement}
            >
              + Add
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 px-3 py-1 rounded"
              >
                {req}
                <button
                  type="button"
                  className="btn btn-xs btn-error"
                  onClick={() => removeRequirement(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="hidden"
            name="requirements"
            value={JSON.stringify(requirements)}
          />
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="font-bold text-lg mb-2">Responsibilities</h3>
          <div className="flex gap-2">
            <input
              value={responsibility}
              onChange={(e) => setResponsibility(e.target.value)}
              placeholder="Responsibility"
              className="input input-bordered w-full"
            />
            <button
              type="button"
              className="btn btn-outline"
              onClick={addResponsibility}
            >
              + Add
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {responsibilities.map((res, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 px-3 py-1 rounded"
              >
                {res}
                <button
                  type="button"
                  className="btn btn-xs btn-error"
                  onClick={() => removeResponsibility(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="hidden"
            name="responsibilities"
            value={JSON.stringify(responsibilities)}
          />
        </div>

        {/* HR Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="hr_name"
            type="text"
            placeholder="HR Name"
            className="input input-bordered w-full"
            required
          />

          <input
            name="hr_email"
            type="email"
            value={user?.email}
            placeholder="HR Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Status */}
        <label>Job Active or DeActive </label>
        <select name="status" className="select select-bordered w-full mt-4">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="closed">Closed</option>
        </select>

        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-full mt-6 text-lg"
        >
          {loading ? "Loading....." : " Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
