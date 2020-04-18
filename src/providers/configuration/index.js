import React, {useContext} from 'react';
import Context from './context';

const configuration = {
  basepath: process.env.PUBLIC_URL
};

const Configuration = ({children}) => <Context.Provider value={configuration}>{children}</Context.Provider>;

export const useConfiguration = () => useContext(Context);

export default Configuration;
