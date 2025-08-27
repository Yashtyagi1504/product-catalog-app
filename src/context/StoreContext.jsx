import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', price: 1000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert("Product is Added")
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    alert("Product is remove")
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    filters,
    setFilters,
    searchQuery,
    setSearchQuery,
    searchInput,
    setSearchInput,
    handleSearch,
    selectedProduct,
    setSelectedProduct,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
