import {useMemo, useEffect} from 'react';
import {useProductsSelector} from 'providers/products';
import * as actions from 'providers/productBuckets/actions';
import {useBucketsDispatch} from 'providers/productBuckets';

export default (productId, categoryId) => {
  const {ids, byId} = useProductsSelector();
  const dispatch = useBucketsDispatch();

  const relatedIds = useMemo(() => {
    const validIds = ids.filter(id => id !== productId);
    const related = validIds.filter(id => byId[id].categoryId === categoryId).slice(0, 3);
    return related.length > 0 ? related : validIds.slice(0, 3);
  }, [ids, byId, productId]);

  useEffect(() => {
    if (!categoryId || relatedIds.length) return;
    const bucketParams = {categoryId};
    dispatch(actions.fetchBucket(bucketParams, 3));
  }, [productId, categoryId]);

  return relatedIds;
};
