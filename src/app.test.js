import React from 'react';
import {render, wait} from '@testing-library/react';
import App from './app';

test('renders', async () => {
  const {getAllByText, getByTestId} = render(<App />);
  expect(getByTestId('router').firstChild).toBeNull();

  await wait();
  expect(getAllByText('I Want It')).toHaveLength(2); //header, footer
});
