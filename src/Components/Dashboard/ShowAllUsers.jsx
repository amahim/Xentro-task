import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const ShowAllUsers = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;
  const { street, city, zipcode } = address;
  const { name: companyName, catchPhrase } = company;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Table Row */}
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border">{name}</td>
        <td className="px-4 py-2 border">{email}</td>
        <td className="px-4 py-2 border">{city}</td>
        <td className="px-4 py-2 border text-center">
          <button
            className="btn bg-[#797979b6] text-black"
            onClick={() => setIsOpen(true)}
          >
            <FaEye />
          </button>
        </td>
      </tr>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-3 rounded-lg w-4/5 md:w-3/5 lg:w-2/5 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> {website}</p>
            <p><strong>Address:</strong> {street}, {city}, {zipcode}</p>
            <p><strong>Company:</strong> {companyName}</p>
            <p><strong>Catchphrase:</strong> {catchPhrase}</p>

            <button
              className="btn bg-[#1d1d1d] text-white mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowAllUsers;
