import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const Filters = () => {
  const { filters, setFilters } = useContext(StoreContext);

  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, price: Number(e.target.value) }));
  };

  return (
    <div>
      <h2 className="font-bold mb-2">Category</h2>
      <div className="space-y-1">
        {['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"].map(cat => (
          <div key={cat}>
            <input
              type="radio"
              id={cat}
              name="category"
              value={cat}
              checked={filters.category === cat}
              onChange={handleCategoryChange}
            />
            <label htmlFor={cat} className="ml-2 capitalize">{cat}</label>
          </div>
        ))}
      </div>

      <h2 className="font-bold mt-4 mb-2">Price (max)</h2>
      <input
        type="range"
        min="0"
        max="1000"
        value={filters.price}
        onChange={handlePriceChange}
        className="w-full"
      />
      <div className="text-right">${filters.price}</div>
    </div>
  );
};

export default Filters;