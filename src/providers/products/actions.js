import * as actions from 'providers/utilities/actions';

export const fetchProduct = id => (state, dispatch, {api, notification}) => {
  dispatch(actions.startFetchResource(id));

  return api
    .getProduct(id)
    .then(({data}) => dispatch(actions.doneFetchResource(id, data)))
    .catch(error => {
      dispatch(actions.failFetchResource(id, error));
      notification.server(error);
    });
};
