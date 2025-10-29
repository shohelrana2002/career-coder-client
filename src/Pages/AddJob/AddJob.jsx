import React, { useState } from "react";

const AddJob = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };
  const [requirement, setRequirement] = useState("");
  const [requirements, setRequirements] = useState([]);

  const addRequirement = () => {
    if (requirement.trim() === "") return;
    setRequirements([...requirements, requirement]);
    setRequirement(""); // input clear
  };
  const removeRequirement = (index) => {
    const updated = requirements.filter((_, i) => i !== index);
    setRequirements(updated);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Post a Job</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="title"
            className="input input-bordered w-full"
            placeholder="Job Title"
            required
          />
          <input
            name="location"
            className="input input-bordered w-full"
            placeholder="Job Location"
            required
          />

          <input
            name="category"
            className="input input-bordered w-full"
            placeholder="Category"
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
            className="input input-bordered w-full"
            placeholder="Company Name"
            required
          />
          <input
            name="company_logo"
            className="input input-bordered w-full"
            placeholder="Company Logo URL"
            required
          />
        </div>

        <h3 className="font-bold mt-6 mb-2">Salary Range</h3>
        <div className="grid grid-cols-3 gap-3">
          <input
            name="minSalary"
            className="input input-bordered"
            placeholder="Min"
            type="number"
            required
          />
          <input
            name="maxSalary"
            className="input input-bordered"
            placeholder="Max"
            type="number"
            required
          />
          <select name="currency" className="select select-bordered" required>
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
          </select>
        </div>

        <textarea
          name="description"
          className="textarea textarea-bordered w-full mt-5"
          rows="4"
          placeholder="Job Description"
          required
        />

        {/* Requirements */}
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Requirements ✅</h3>

          {/* Input Field */}
          <div className="flex gap-2">
            <input
              className="input input-bordered w-full"
              placeholder="Requirement"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={addRequirement}
            >
              + Add
            </button>
          </div>

          {/* Show Added Requirements */}
          <u l className="mt-3 space-y-2">
            {requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 px-3 py-1 rounded"
              >
                {req}
                <button
                  className="btn btn-xs btn-error"
                  onClick={() => removeRequirement(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </u>

          {/* Hidden field to send data */}
          <input
            type="hidden"
            name="requirements"
            value={JSON.stringify(requirements)}
          />
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h3 className="font-bold">Responsibilities</h3>
          <input
            className="input input-bordered w-full mt-2"
            placeholder={`Responsibility `}
            required
          />

          <button type="button" className="btn btn-outline btn-sm mt-2">
            + Add Responsibility
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <input
            name="hr_name"
            className="input input-bordered w-full"
            placeholder="HR Name"
            required
          />
          <input
            name="hr_email"
            className="input input-bordered w-full"
            placeholder="HR Email"
            required
          />
        </div>

        <select name="status" className="select select-bordered w-full mt-6">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="closed">Closed</option>
        </select>

        <button className="btn btn-primary w-full mt-6 text-lg">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;
