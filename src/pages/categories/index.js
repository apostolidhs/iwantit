import React from 'react';
import Link from 'components/link';
import {useCategoriesSelector} from 'providers/categories';

const Categories = () => {
  const {loading, byId} = useCategoriesSelector(({loading, byId}) => ({loading, byId}));
  return (
    <div>
      <h1>Categories</h1>
      <Link to="/category/1">category</Link>
      <p>loading {loading}</p>
      <p>byId {byId && JSON.stringify(byId)}</p>
    </div>
  );
};

export default Categories;
