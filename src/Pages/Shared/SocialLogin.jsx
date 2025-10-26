import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
const SocialLogin = () => {
  const { handleGoogle } = useGetAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const handleGoogleLogin = async () => {
    try {
      await handleGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <div>
      <p className="font-semibold text-shadow-gray-500 my-1">
        Login With Social Account ?
      </p>
      <div className="flex gap-x-3">
        <button className="btn btn-primary" onClick={handleGoogleLogin}>
          <FcGoogle size={24} /> Google
        </button>
        <button className="btn btn-primary">
          <FaGithub size={24} /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
