import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useGetAuth from "../../Hooks/useGetAuth";
import { Eye, EyeOff, Lock } from "lucide-react";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSignIn, handleResetPass } = useGetAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    try {
      const logged = await handleSignIn(email, password);
      if (!logged?.user?.emailVerified) {
        return toast.error("plz verified Your Account !!");
      }
      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };
  const emailRef = useRef();
  const handleForget = async () => {
    const email = emailRef.current.value;

    if (!email) return toast.error("plz enter Your email and password  reset");
    try {
      await handleResetPass(email);
      toast.success("Plz Check Your Email");
    } catch (err) {
      toast.err(err?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your account and continue exploring
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              ref={emailRef}
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
            <button
              type="button"
              onClick={() => handleForget()}
              className="hover:text-blue-600 cursor-pointer hover:underline font-medium"
            >
              Forgot password?
            </button>
            <Link to="/register" className="hover:text-blue-600 font-medium">
              Create account ?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 bg-blue-600 hover:bg-blue-700 border-none text-white font-semibold"
          >
            {loading ? "loading...." : "Login"}
          </button>
        </form>
        <div className="mt-4 flex flex-col items-center justify-center">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
