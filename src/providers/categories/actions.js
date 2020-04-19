import * as actions from 'providers/utilities/actions';

const transform = data => data.sort((a, b) => a.position - b.position);

export const fetch = () => (state, dispatch, {api, notification}) => {
  dispatch(actions.startFetch());

  return api
    .getCategories({transform})
    .then(({data}) => {
      dispatch(actions.doneFetch(data));
    })
    .catch(error => {
      dispatch(actions.failFetch());
      notification.server(error);
    });
};

export const fetchCategory = id => (state, dispatch, {api, notification}) => {
  dispatch(actions.startFetchResource(id));

  return api
    .getCategory(id)
    .then(({data}) => {
      dispatch(actions.doneFetchResource(id, data));
    })
    .catch(error => {
      dispatch(actions.failFetchResource(id, error));
      notification.server(error);
    });
};
