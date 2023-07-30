import React from 'react';
import './ProductList.css';

const ProductItem = ({ product }) => {
  return (
    <li className="product-item">
      <strong>{product.name}</strong>
      <span>${product.price}</span>
    </li>
  );
};

export default ProductItem;
