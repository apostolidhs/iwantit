import React from 'react';
import ConfigurationProvider from 'providers/configuration';
import ThemeProvider from 'providers/theme';
import LocalizationProvider from 'providers/localization';
import NotificationsProvider from 'providers/notifications';
import ApiProvider from 'providers/api';
import CategoriesProvider from 'providers/categories';
import Pages from './pages';

const App = () => (
  <ConfigurationProvider>
    <ThemeProvider>
      <LocalizationProvider>
        <NotificationsProvider>
          <ApiProvider>
            <CategoriesProvider>
              <Pages />
            </CategoriesProvider>
          </ApiProvider>
        </NotificationsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </ConfigurationProvider>
);

export default App;
