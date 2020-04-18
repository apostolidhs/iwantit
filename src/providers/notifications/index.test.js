import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import LocalizationProvider from 'providers/localization';
import NotificationsProvider, {useNotification} from './index';

it('renders', () => {
  const {getByText} = render(
    <LocalizationProvider>
      <NotificationsProvider>myContent</NotificationsProvider>
    </LocalizationProvider>
  );
  expect(getByText('myContent')).toBeInTheDocument();
});

it('prompts a notification', () => {
  const Component = () => {
    const {warning} = useNotification();
    return <button onClick={() => warning('This is a notification')}>showNotification</button>;
  };

  const {queryByText} = render(
    <LocalizationProvider>
      <NotificationsProvider>
        <Component />
      </NotificationsProvider>
    </LocalizationProvider>
  );

  expect(queryByText('This is a notification')).not.toBeInTheDocument();
  fireEvent.click(queryByText('showNotification'));
  expect(queryByText('This is a notification')).toBeInTheDocument();
});
