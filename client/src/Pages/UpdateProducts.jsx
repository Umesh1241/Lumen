import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { productsData } from '../data';  
import Header from '../components/Header';

const UpdateProducts = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const productToUpdate = productsData.find(product => product.id === parseInt(id, 10));
  const [formData, setFormData] = useState({
    name: productToUpdate?.name || '',
    holder: productToUpdate?.holder || '',
    inStock: productToUpdate?.inStock || false,
    availability: productToUpdate?.availability ||'',
    reorderPoint: productToUpdate?.reorderPoint ||'',
    image: productToUpdate?.image || '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated product:', formData);

    navigate('/products');
  };

  if (!productToUpdate) {
    return <p>Product not found.</p>;
  }

  return (
    <>   
    <Header/>
     <div className="max-w-lg mx-auto p-4 mt-7 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="holder" className="block text-gray-700 font-semibold">
            category:
          </label>
          <input
            type="text"
            id="holder"
            name="holder"
            value={formData.holder}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inStock" className="block text-gray-700 font-semibold">
            In Stock:
          </label>
          <input
            type="checkbox"
            id="inStock"
            name="inStock"
            checked={formData.inStock}
            onChange={handleChange}
            className="mr-2"
          />
          <span>{formData.inStock ? 'Yes' : 'No'}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold">
            Stock Level:
          </label>
          <input
            type="number"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold">
            Reorder Point:
          </label>
          <input
            type="number"
            id="reorderPoint"
            name="reorderPoint"
            value={formData.reorderPoint}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white rounded-lg bg-red-500"
        >
          Update Product
        </button>
      </form>
    </div>
    </>
  );
};

export default UpdateProducts;
