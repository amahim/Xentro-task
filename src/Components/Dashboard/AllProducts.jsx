import React, { useState } from "react";
import useProducts from "../Hooks/UseProducts";
import ShowAllProducts from "./ShowAllProducts";

const AllProducts = () => {
  const [products] = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-black font-medium">
          All Products
        </h1>

        {/* Search Input */}
        <label className="input input-bordered flex items-center gap-2 mt-5">
          <input
            type="text"
            className="grow"
            placeholder="Search product by name"
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

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ShowAllProducts product={product} key={product.id} />
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
