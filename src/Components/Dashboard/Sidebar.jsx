

import { FaList, FaProductHunt, FaUsers, FaArrowLeft, FaCartPlus } from "react-icons/fa"; 
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:h-screen md:shadow-2xl">
      <div className="drawer md:drawer-open z-50 h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Toggle Button */}
          <label
            htmlFor="my-drawer"
            className="text-black text-2xl drawer-button block md:hidden mt-4 ml-4"
          >
            <FaList className="w-4" />
          </label>
        </div>
        <div className="drawer-side h-full">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white  w-52 h-screen flex flex-col  ">
            {/* Sidebar Title */}
            <div className="flex-grow py-5">
              <p className="text-center text-2xl md:text-3xl">Dashboard</p>
              <div className="divider"></div>
              <div className="flex flex-col gap-6">
                {/* NavLink Items */}
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-lg md:text-xl flex gap-2 items-center md:gap-3 ${
                      isActive ? "bg-black py-2 px-2 text-white" : "text-black"
                    }`
                  }
                  end
                >
                  <FaUsers />
                  <p>All Users</p>
                </NavLink>

                <NavLink
                  to="/dashboard/all-products"
                  className={({ isActive }) =>
                    `text-lg md:text-xl flex gap-2 items-center md:gap-3 ${
                      isActive ? "bg-black py-2 px-2 text-white" : "text-black"
                    }`
                  }
                >
                  <FaProductHunt />
                  <p>All Products</p>
                </NavLink>
                
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-auto">
              <Link to="/" className="rounded-none border-2 border-black btn w-full">
                <FaArrowLeft />
                <p>Go To Home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

  