import React, { useState, useContext } from 'react';
import { StoreProvider, StoreContext } from './context/StoreContext';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => setShowCart(!showCart)} />
      {showCart && <Cart />}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
      <div className="flex flex-1">
        <aside className="w-1/4 bg-white p-4">
          <Filters />
        </aside>
        <main className="w-3/4 p-4">
          <ProductList />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
