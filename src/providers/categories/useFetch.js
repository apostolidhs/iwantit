import {useEffect} from 'react';
import * as actions from 'providers/utilities/actions';
import {useNotification} from 'providers/notifications';
import {useApi} from 'providers/api';

const transform = data => {
  return data.sort((a, b) => a.position - b.position);
};

export default dispatch => {
  const api = useApi();
  const notification = useNotification();

  useEffect(() => {
    dispatch(actions.startFetch());

    api
      .getCategories({transform})
      .then(({data}) => dispatch(actions.doneFetch(data)))
      .catch(error => {
        debugger;
        dispatch(actions.failFetch());
        notification.server(error);
      });
  }, []);
};
