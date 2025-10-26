import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useGetAuth from "../../Hooks/useGetAuth";
import { Eye, EyeOff, Lock } from "lucide-react";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const { handleSignUp, handleSendEmail } = useGetAuth();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    try {
      setLoading(true);
      await handleSignUp(email, password);
      await handleSendEmail();
      toast.success("Account Create success.Verify Code Send Your Email");
      navigate("/login");
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl">
        {/* Left Section (Image + Text) */}
        <div className="text-center lg:text-left space-y-6 max-w-md">
          <h1 className="text-5xl font-bold text-blue-700 leading-tight">
            Create Your Account 🚀
          </h1>
          <p className="text-gray-600 text-lg">
            Join us today and explore unlimited possibilities. Simple, secure,
            and fast registration!
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="card w-full max-w-sm bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
              Register Now
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-150 ease-in-out"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
                  >
                    {show ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <Link to="/login" className="hover:text-blue-600 font-medium">
                  Already have an account? Login Now !
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-4 bg-blue-600 hover:bg-blue-700 border-none text-white"
              >
                {loading ? "Loading...." : "Create Account"}
              </button>
            </form>
          </div>
          <div className="my-4 flex flex-col items-center justify-center">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
