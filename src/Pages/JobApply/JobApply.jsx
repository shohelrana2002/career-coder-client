import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useGetAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const phoneNumber = form.phoneNumber.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const coverNote = form.coverNote.value;
    const appliedData = {
      jobId: id,
      name,
      email,
      linkedin,
      phoneNumber,
      github,
      resume,
      coverNote,
    };

    try {
      await axios
        .post(`http://localhost:4000/applied`, appliedData)
        .then((res) => {
          if (res?.data?.insertedId) {
            toast.success("Applied Jobs Successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    // Form data submission code
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">
        Apply for this Job
        <Link
          className="btn ml-3 bg-blue-500 text-white px-4 py-2 rounded"
          to={`/jobs/${id}`}
        >
          View Details
        </Link>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            name="email"
            value={user?.email}
            type="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            name="phoneNumber"
            type="tel"
            className="w-full border px-3 py-2 rounded"
            placeholder="Phone number"
            required
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block font-medium mb-1">LinkedIn Profile</label>
          <input
            name="linkedin"
            type="url"
            className="w-full border px-3 py-2 rounded"
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block font-medium mb-1">GitHub Profile</label>
          <input
            name="github"
            type="url"
            className="w-full border px-3 py-2 rounded"
            placeholder="https://github.com/username"
          />
        </div>

        {/* Resume URL */}
        <div>
          <label className="block font-medium mb-1">Resume / CV Link</label>
          <input
            name="resume"
            type="url"
            className="w-full border px-3 py-2 rounded"
            placeholder="Google Drive / Resume Link"
            required
          />
        </div>

        {/* Cover Note */}
        <div>
          <label className="block font-medium mb-1">Short Cover Note</label>
          <textarea
            name="coverNote"
            className="w-full border px-3 py-2 rounded"
            rows={4}
            placeholder="Tell us why you're a good fit"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
