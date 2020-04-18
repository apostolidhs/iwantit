import React, {useEffect} from 'react';
import Link from 'components/link';
import {useBucketParamsSelector, useBucketsDispatch} from 'providers/productBuckets';
import * as actions from 'providers/productBuckets/actions';

const Products = ({categoryId}) => {
  const params = {categoryId, page, sort, order, priceMax, priceMin};
  const {ids, loaded, loading} = useBucketParamsSelector(params);
  const dispatch = useBucketsDispatch();

  useEffect(() => {
    if (loading || loaded) return;
    dispatch(actions.fetchBucket(categoryId, params));
  }, [loading, loaded]);

  return (
    <div>
      <h1>Products from category {categoryId}</h1>
      <Link to="/product/1">product</Link>
      <p>ids: {ids}</p>
      <p>loaded: {loaded}</p>
      <p>loading: {loading}</p>
    </div>
  );
};

export default Products;
