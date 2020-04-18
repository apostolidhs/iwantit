import React from 'react';
import {render} from '@testing-library/react';
import ConfigurationProvider from 'providers/configuration';
import ApiProvider from './index';

it('renders', () => {
  const {getByText} = render(
    <ConfigurationProvider>
      <ApiProvider>myContent</ApiProvider>
    </ConfigurationProvider>
  );
  expect(getByText('myContent')).toBeInTheDocument();
});
