import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ShowAllProducts = ({ product }) => {
  const { id, name } = product;

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://api.restful-api.dev/objects/${productId}`);
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product.");
    }
  };

  return (
    <div className="bg-slate-500 shadow-xl rounded-xl text-white p-2 flex justify-between items-center">
      <p>{name}</p>
      <button onClick={()=> handleDelete(id)} className="btn btn-error text-white">
        Delete
      </button>
    </div>
  );
};

export default ShowAllProducts;
