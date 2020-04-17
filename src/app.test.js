import React from 'react';
import {render, wait} from '@testing-library/react';
import {navigate} from '@reach/router';
import App from './app';

test('renders', async () => {
  navigate('/iwantit');

  const {getByText, getByTestId} = render(<App />);
  expect(getByTestId('router').firstChild).toBeNull();

  await wait();
  expect(getByText('Categories')).toBeInTheDocument();
});
