import React, { useState } from 'react';
import { productsData } from '../data';  
import ProductCard from '../components/ProductCard'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <div><button>Add Product</button></div>
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
