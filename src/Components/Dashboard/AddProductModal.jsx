import React from "react";

const AddProductModal = ({ setShowModal, addProduct }) => {
  const handleSubmit = (e) => {
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

    addProduct(newProduct);
    setShowModal(false);
    e.target.reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="id" placeholder="Product ID" required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="name" placeholder="Product Name" required className="w-full p-2 border rounded mb-2" />
          <input type="number" name="price" placeholder="Price" required className="w-full p-2 border rounded mb-2" />
          <input type="text" name="color" placeholder="Color" required className="w-full p-2 border rounded mb-4" />

          <div className="flex justify-between">
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">
              Add Product
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
