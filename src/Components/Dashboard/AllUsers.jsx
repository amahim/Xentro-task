import React from "react";
import useUsers from "../Hooks/useUsers";
import ShowAllUsers from "./ShowAllUsers";

const AllUsers = () => {
  const [users] = useUsers();

  return (
    <div>
      <div>
        <h1 className="text-center text-xl  md:text-2xl lg:text-3xl text-black font-medium ">
          All Users
        </h1>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table-auto w-full border-collapse border border-green-300">
          {/* head */}
          <thead>
            <tr>
              <th className="text-start px-4 py-2 border">Name</th>
              <th className="text-start px-4 py-2 border">Email</th>
              <th className="text-start px-4 py-2 border">City</th>
              <th className="text-center px-4 py-2 border">View details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ShowAllUsers user={user} key={user.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
