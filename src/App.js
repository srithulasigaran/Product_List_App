import React from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>Product List App</h1>
      </div>
      <div className="main-content">
        <ProductList />
      </div>
      <div className="footer">
        <p>&copy; 2023 Product List App</p>
      </div>
    </div>
  );
};

export default App;
