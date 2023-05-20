import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(navigate("/", { replace: true }))
      .catch((err) => {
        console.log(err);
      });
  };

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-col justify-center items-center ">
          <img
            src="https://i.ibb.co/yg06Jjm/menu-1.png"
            alt=""
            className="w-2/3"
          />
          Home
        </div>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-col justify-center items-center ">
          <img
            src="https://i.ibb.co/QKJ911t/menu-3.png"
            alt=""
            className="w-2/3"
          />
          Blogs
        </div>
      </NavLink>
      <NavLink
        to="/alltoys"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-col justify-center items-center ">
          <img
            src="https://i.ibb.co/3yhDthw/menu-2.png"
            alt=""
            className="w-2/3"
          />
          All Toys
        </div>
      </NavLink>

      {user ? (
        <NavLink
          to="/addtoy"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <div className="flex flex-col justify-center items-center ">
            <img
              src="https://i.ibb.co/3NQZ5Y7/menu-7.png"
              alt=""
              className="h-[46.656px]"
            />
            Add A Toy
          </div>
        </NavLink>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 my-container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/s65wgtv/Logo.png"
            alt=""
            className="w-1/2"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" px-1  font-bold lg:flex gap-5">{navItems}</ul>
        </div>

        <div className="navbar-end gap-6">
          {user?.photoURL ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-50 rounded-full border ">
                <img src={user?.photoURL} alt="" title={user?.displayName} />
              </div>
            </label>
          ) : (
            <p className="my-text-1 mr-20 ">{user?.email}</p>
          )}

          {user ? (
            <button className="btn my-btn-1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn my-btn-1">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
