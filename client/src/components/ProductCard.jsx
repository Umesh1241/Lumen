import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product, handleDelete }) => {
  const handleBuyClick = () => {
    toast.success(`You have added ${product.name} to your cart!`);
  };

  return (
    <div className="max-w-md lg:max-w-lg m-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover rounded-t-lg"
  />
  <div className="mt-4">
    <h3 className="text-xl font-semibold">{product.name}</h3>
    <p className="text-gray-500">Category: {" "}{product.holder}</p>
    <p className="">stockLevel: {product.availability}</p>
    <p className="text-gray-700">Reorder Point: {product.reorderPoint}</p>
    <p
      className={`mt-2 ${
        product.inStock ? "text-green-500" : "text-red-500"
      }`}
    >
      {product.inStock ? "In Stock" : "Out of Stock"}
    </p>
    <div className="flex justify-between space-x-4 mt-2">
      <Link to={`/products/update-product/${product.id}`} className="w-1/2 py-2 bg-blue-500 text-white rounded-lg text-center" >Update</Link>
      <button className="w-1/2 py-2 bg-red-500 text-white rounded-lg"
      onClick={() => handleDelete(product.id)}
      >
        Delete
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
