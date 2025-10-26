import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, handleSignOut } = useGetAuth();
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200
       ${
         isActive
           ? "bg-blue-600 text-white shadow-md scale-[1.03]"
           : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
       }`
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await handleSignOut();
      toast.success("Logout Success");
      navigate("/login");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
