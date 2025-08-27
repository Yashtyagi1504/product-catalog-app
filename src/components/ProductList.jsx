import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, filters, searchQuery } = useContext(StoreContext);

  const filteredProducts = products.filter(product => {
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesPrice = product.price <= filters.price;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
