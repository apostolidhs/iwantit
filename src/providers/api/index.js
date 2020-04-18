import React, {useMemo} from 'react';
import useContextSelector from 'hooks/useContextSelector';
import {useApiUrl} from 'providers/configuration';
import getDispatch from './getDispatch';
import Context from './context';

const Api = ({children}) => {
  const apiUrl = useApiUrl();
  const dispatch = useMemo(() => getDispatch(apiUrl), []);

  return <Context.Provider value={dispatch}>{children}</Context.Provider>;
};

export const useApi = select => useContextSelector(Context, select || (n => n));

export default Api;
