import React from 'react';
import {render} from '@testing-library/react';
import App from './app';

test('renders', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText('Explore products');
  expect(linkElement).toBeInTheDocument();
});
