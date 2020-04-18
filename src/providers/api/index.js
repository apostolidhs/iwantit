import React, {useMemo} from 'react';
import useContextSelector from 'hooks/useContextSelector';
import {useConfiguration} from 'providers/configuration';
import getDispatch from './getDispatch';
import getMockDispatch from './getMockDispatch';
import Context from './context';

const Api = ({children}) => {
  const {apiUrl, mockApi} = useConfiguration();
  const dispatch = useMemo(() => (mockApi ? getMockDispatch() : getDispatch(apiUrl)), []);

  return <Context.Provider value={dispatch}>{children}</Context.Provider>;
};

export const useApi = select => useContextSelector(Context, select || (n => n));

export default Api;
