import React from 'react';
import identity from 'lodash/identity';
import useContextSelector from 'hooks/useContextSelector';
import Context from './context';

const configuration = {
  basepath: process.env.PUBLIC_URL,
  apiUrl: 'https://bp-interview.herokuapp.com',
  mockApi: process.env.NODE_ENV !== 'production'
};

const Configuration = ({children}) => <Context.Provider value={configuration}>{children}</Context.Provider>;

export const useConfiguration = (select = identity) => useContextSelector(Context, select);

export default Configuration;
