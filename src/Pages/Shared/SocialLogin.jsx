import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
const SocialLogin = () => {
  const { handleGoogle } = useGetAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await handleGoogle();
      navigate("/");
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
