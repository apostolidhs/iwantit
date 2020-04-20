import {useEffect, useMemo} from 'react';
import debounce from 'lodash/debounce';
import {useBucketParamsSelector, useBucketsDispatch} from 'providers/productBuckets';
import {getBucketId} from 'providers/productBuckets/helpers';
import * as bucketActions from 'providers/productBuckets/actions';

const bucketSelector = ({ids, loaded: bucketLoaded, loading}) => ({ids, bucketLoaded, loading});

export default bucketParams => {
  const bucketId = getBucketId(bucketParams);
  const {ids, bucketLoaded, loading} = useBucketParamsSelector(bucketParams, bucketSelector);
  const dispatch = useBucketsDispatch();

  const setDeferredPriceRange = useMemo(
    () =>
      debounce((nextDispatch, nextBucket) => nextDispatch(bucketActions.fetchBucket(nextBucket)), 600, {leading: true}),
    []
  );

  useEffect(() => () => setDeferredPriceRange.cancel(), []);

  useEffect(() => {
    if (!loading && !bucketLoaded) setDeferredPriceRange(dispatch, bucketParams);
  }, [loading, bucketLoaded, bucketId]);

  return {ids, bucketLoaded, loading};
};
