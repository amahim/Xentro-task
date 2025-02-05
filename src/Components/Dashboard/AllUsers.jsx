import React, { useState } from "react";
import useUsers from "../Hooks/useUsers";
import ShowAllUsers from "./ShowAllUsers";

const AllUsers = () => {
  const [users] = useUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-black font-medium">
          All Users
        </h1>

        {/* Search Input */}
        <label className="input input-bordered flex items-center gap-2 mt-5">
          <input
            type="text"
            className="grow"
            placeholder="Search user by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto mt-10">
        <table className="table-auto w-full border-collapse border">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="text-start px-4 py-2 border">Name</th>
              <th className="text-start px-4 py-2 border">Email</th>
              <th className="text-start px-4 py-2 border">City</th>
              <th className="text-center px-4 py-2 border">View details</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <ShowAllUsers user={user} key={user.id} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
