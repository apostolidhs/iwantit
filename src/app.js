import React from 'react';
import ThemeProvider from 'providers/theme';
import NotificationsProvider from 'providers/notifications';
import LocalizationProvider from 'providers/localization';
import Pages from './pages';

const App = () => (
  <ThemeProvider>
    <LocalizationProvider>
      <NotificationsProvider>
        <Pages />
      </NotificationsProvider>
    </LocalizationProvider>
  </ThemeProvider>
);

export default App;
