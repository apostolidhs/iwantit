import React from 'react';
import Link from 'components/link';

const Products = ({categoryId}) => {
  return (
    <div>
      <h1>Products from category {categoryId}</h1>
      <Link to="/product/1">product</Link>
    </div>
  );
};

export default Products;
