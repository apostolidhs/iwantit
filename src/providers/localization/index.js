import React from 'react';
import {IntlProvider, useIntl as useNativeIntl} from 'react-intl';
import el from './el';

const Localization = ({children}) => (
  <IntlProvider locale="el" messages={el}>
    {children}
  </IntlProvider>
);

export const useIntl = () => {
  const {formatMessage} = useNativeIntl();
  return id => formatMessage({id});
};

export default Localization;
