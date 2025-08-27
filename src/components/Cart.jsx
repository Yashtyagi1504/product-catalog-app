import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="bg-white p-4 shadow-md max-w-md mx-auto my-4 border">
      <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y">
          {cart.map((item, index) => (
            <li key={index} className="py-2 flex justify-between items-center">
              <div className="flex-1">
                <span>{item.title}</span>
                <span className="block font-semibold text-blue-700">${item.price}</span>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
