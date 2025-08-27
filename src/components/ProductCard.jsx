import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const ProductCard = ({ product }) => {
  const { addToCart, setSelectedProduct } = useContext(StoreContext);

  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <div 
        className="cursor-pointer" 
        onClick={() => setSelectedProduct(product)}
      >
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-2" />
        <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
        <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
