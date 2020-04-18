import React from 'react';
import {render} from '@testing-library/react';
import ConfigurationProvider from 'providers/configuration';
import ApiProvider from 'providers/api';
import NotificationProvider from 'providers/notifications';
import LocalizationProvider from 'providers/localization';
import ProductsProvider from './index';

it('renders', () => {
  const {getByText} = render(
    <LocalizationProvider>
      <NotificationProvider>
        <ConfigurationProvider>
          <ApiProvider>
            <ProductsProvider>myContent</ProductsProvider>
          </ApiProvider>
        </ConfigurationProvider>
      </NotificationProvider>
    </LocalizationProvider>
  );
  expect(getByText('myContent')).toBeInTheDocument();
});
