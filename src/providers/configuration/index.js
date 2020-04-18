import React from 'react';
import identity from 'lodash/identity';
import useContextSelector from 'hooks/useContextSelector';
import Context from './context';

const configuration = {
  basepath: process.env.PUBLIC_URL,
  apiUrl: 'http://bp-interview.herokuapp.com'
};

const Configuration = ({children}) => <Context.Provider value={configuration}>{children}</Context.Provider>;

export const useConfiguration = (select = identity) => useContextSelector(Context, select);

const apiUrlSelector = ({apiUrl}) => apiUrl;
export const useApiUrl = () => useConfiguration(apiUrlSelector);

export default Configuration;
