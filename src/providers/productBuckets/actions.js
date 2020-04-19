import * as actions from 'providers/utilities/actions';
import {getBucketId} from './helpers';

export const fetchBucket = (categoryId, {page, sort, order, priceMax, priceMin}) => (
  state,
  dispatch,
  {api, notification, productsDispatch}
) => {
  const bucketId = getBucketId({categoryId, page, sort, order, priceMax, priceMin});

  dispatch(actions.startFetchResource(bucketId));

  return api
    .getProductsByCategory(categoryId, {page, sort, order, priceMax, priceMin})
    .then(({data}) => {
      productsDispatch(actions.doneFetch(data));
      const ids = data.map(({id}) => id.toString());
      dispatch(actions.doneFetchResource(bucketId, {ids}));
    })
    .catch(error => {
      dispatch(actions.failFetchResource(bucketId, error));
      notification.server(error);
    });
};
