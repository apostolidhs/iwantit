import React, {Fragment, useState, useMemo, useContext} from 'react';
import {useIntl} from 'providers/localization';
import getDispatch from './getDispatch';
import Context from './context';
import Notification from './notification';

const Notifications = ({children}) => {
  const [state, setState] = useState();
  const intl = useIntl();

  const dispatch = useMemo(() => getDispatch(setState, {intl}), []);

  return (
    <Fragment>
      {state && <Notification {...state} />}
      <Context.Provider value={dispatch}>{children}</Context.Provider>
    </Fragment>
  );
};

export const useNotification = () => useContext(Context);

export default Notifications;
