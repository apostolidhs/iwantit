import {useApi} from 'providers/api';
import {useNotification} from 'providers/notifications';

export default () => {
  const api = useApi();
  const notification = useNotification();

  return {api, notification};
};
