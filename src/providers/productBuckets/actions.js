import * as actions from 'providers/utilities/actions';

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
      const ids = data.map(({id}) => id);
      dispatch(actions.doneFetchResource(bucketId, ids));
    })
    .catch(error => {
      dispatch(actions.failFetchResource(bucketId));
      notification.server(error);
    });
};
