import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";


const Navbar = () => {
  const {loggedIn,setLoggedIn} = useAuth()
    const handleLogout = () => setLoggedIn(false);

  return (
    <div>
      <div className="navbar ">
        <div className="flex-1">
          <Link to="/"  className="btn btn-ghost text-xl">Xentro</Link>
        </div>
        <div className="flex-none">
          {loggedIn ? (
            <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div>
                <p className="border-2 border-black rounded-full p-2"><FaUser/></p>
            </div>
            </div>
            <ul
              tabIndex={0}
              className="border-2  border-black shadow-2xl menu menu-sm dropdown-content bg-base-100  z-50 mt-3 w-52 p-2 "
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  className="text-error"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          ) : (
            <Link to="/login" className="btn bg-black rounded-none text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
