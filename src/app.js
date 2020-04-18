import React from 'react';
import ConfigurationProvider from 'providers/configuration';
import ThemeProvider from 'providers/theme';
import NotificationsProvider from 'providers/notifications';
import LocalizationProvider from 'providers/localization';
import Pages from './pages';

const App = () => (
  <ConfigurationProvider>
    <ThemeProvider>
      <LocalizationProvider>
        <NotificationsProvider>
          <Pages />
        </NotificationsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </ConfigurationProvider>
);

export default App;
