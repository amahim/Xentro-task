import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const color = e.target.color.value;

    const newProduct = {
      id,
      name,
      data: {
        price,
        color,
      },
    };

    try {
      const response = await axios.post("https://api.restful-api.dev/objects", newProduct); {/* This is the given api in the instructions.So it's not possible for me to add data there but I still showed the complete process. */}
      console.log("Product Added:", response.data);
      toast.success("Product added successfully!");
      
      // Reset form
      e.target.reset();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-black font-medium">
        Add Product
      </h1>

      <div className="mt-10 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-5 border rounded-lg shadow-md">
          <input type="text" name="id" placeholder="Product ID" required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="name" placeholder="Product Name" required className="w-full p-2 border rounded mb-2" />
          <input type="number" name="price" placeholder="Price" required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="color" placeholder="Color" required className="w-full p-2 border rounded mb-4" />

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
