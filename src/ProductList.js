import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Lenovo', price: 900 },
    { id: 2, name: 'Dell', price: 1200 },
    { id: 3, name: 'Apple', price: 1800 },
    { id: 1, name: 'ASUS', price: 800 },
    { id: 2, name: 'Acer', price: 1100 },
    { id: 3, name: 'MSI', price: 2000 },
  ]);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
