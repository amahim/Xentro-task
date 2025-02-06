import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowAllProducts from "./ShowAllProducts";
import toast from "react-hot-toast";
import AddProductModal from "./AddProductModal";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products
  useEffect(() => {
    axios
      .get("https://api.restful-api.dev/objects")
      .then((res) => {
        console.log("API Response:", res.data);

        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Unexpected API response format:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success("Product added successfully!");
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-black font-medium">
        All Products
      </h1>

      {/* Search Input and Add Product Button */}
      <div className="flex flex-col gap-4 md:flex-row items-center mt-5 w-full">
        <input
          type="text"
          className="border  md:flex-grow p-2 rounded"
          placeholder="Search product by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded ml-4"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>

      {/* Products List */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ShowAllProducts
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <AddProductModal setShowModal={setShowModal} addProduct={addProduct} />
      )}
    </div>
  );
};

export default AllProducts;
