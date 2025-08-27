import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { ShoppingCart } from 'lucide-react';

const Header = ({ onCartClick }) => {
  const {
    cart,
    searchInput,
    setSearchInput,
    handleSearch
  } = useContext(StoreContext);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    handleSearch(searchInput)
  }

  return (
    <header className="bg-blue-700 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-xl font-bold">Logo</h1>

      {/* Search Bar */}
      <div className="flex w-full md:w-1/2 gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchInput}
          // onChange={(e) => setSearchInput(e.target.value)}
          onChange={handleInputChange}
          className="flex-grow p-2 rounded text-black bg-white"
        />
        <button
          onClick={handleSearch}
          className="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100"
        >
          Search
        </button>
      </div>

      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={onCartClick}>
        <ShoppingCart />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-1 rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
