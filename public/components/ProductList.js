import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
