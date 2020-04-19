export default (dispatch, {intl}) => {
  let timeout = null;

  const clear = () => {
    clearTimeout(timeout);
    dispatch(null);
  };

  const make = type => message => {
    clear();
    dispatch({type, message});
    timeout = setTimeout(clear, 5000);
  };

  const info = make('info');

  return {
    info,
    warning: make('warning'),
    server: ({status}) => {
      if (status === 404) return;
      const message = intl(status === -1 ? 'error.connection' : 'error.general');
      info(message);
    }
  };
};
