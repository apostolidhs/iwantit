import React from 'react';
import {render} from '@testing-library/react';
import ConfigurationProvider from './index';

it('renders', () => {
  const {getByText} = render(<ConfigurationProvider>myContent</ConfigurationProvider>);
  expect(getByText('myContent')).toBeInTheDocument();
});
