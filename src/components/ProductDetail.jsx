import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { X } from 'lucide-react';

const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[300px] object-contain" 
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-blue-600 text-2xl font-bold mb-4">${product.price}</p>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {product.category}
              </span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;