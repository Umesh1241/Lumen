import React, { useState } from 'react';
import { productsData } from '../data';  
import ProductCard from '../components/ProductCard'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState(productsData);
    const handleDelete = (id) => {
        const updatedProducts = productsData.filter(product => product.id !== id);
        setProducts(updatedProducts);
      };

  return (
    <>
    <Header/>
    <div className='w-full'>
        <div className='flex justify-end mb-4 mt-4'><Link to="/products/add-product" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-40'>Add Product</Link></div>
    <div className="flex flex-wrap justify-center w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}
        handleDelete={handleDelete} />
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
