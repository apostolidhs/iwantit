import React from 'react';
import {render} from '@testing-library/react';
import ConfigurationProvider from 'providers/configuration';
import ThemeProvider from 'providers/theme';
import LocalizationProvider from 'providers/localization';
import NotificationsProvider from 'providers/notifications';
import ApiProvider from 'providers/api';
import CategoriesProvider from 'providers/categories';

export default (Component, options) => (
  render(
    <ConfigurationProvider>
      <ThemeProvider>
        <LocalizationProvider>
          <NotificationsProvider>
            <ApiProvider>
              <CategoriesProvider>
                <Component />
              </CategoriesProvider>
            </ApiProvider>
          </NotificationsProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ConfigurationProvider>
  ),
  options
);
