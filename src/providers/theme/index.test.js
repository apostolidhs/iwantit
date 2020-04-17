import React from 'react';
import {render} from '@testing-library/react';
import ThemeProvider from './index';

it('renders', () => {
  const {getByText} = render(<ThemeProvider>myContent</ThemeProvider>);
  expect(getByText('myContent')).toBeInTheDocument();
});
