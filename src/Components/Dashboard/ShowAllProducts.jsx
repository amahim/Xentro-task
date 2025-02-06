

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ShowAllProducts = ({ product, deleteProduct }) => {
  const { id, name } = product;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteProduct(id);
    toast.success("Product deleted successfully!");
  };

  return (
    <>
      <div className="bg-slate-500 shadow-xl rounded-xl text-white p-2 flex justify-between items-center">
        <p>{name}</p>
        <div className="flex gap-2">
          <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white p-2 rounded">
            <FaEye />
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
            <MdDeleteForever />
          </button>
        </div>
      </div>

      {/* Modal for Product Details */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Product Details</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>

            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowAllProducts;

