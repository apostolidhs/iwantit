import React from 'react';
import ConfigurationProvider from 'providers/configuration';
import ThemeProvider from 'providers/theme';
import LocalizationProvider from 'providers/localization';
import NotificationsProvider from 'providers/notifications';
import ApiProvider from 'providers/api';
import CategoriesProvider from 'providers/categories';
import ProductsProvider from 'providers/products';
import ProductBuckets from 'providers/productBuckets';
import Pages from './pages';

const App = () => (
  <ConfigurationProvider>
    <ThemeProvider>
      <LocalizationProvider>
        <NotificationsProvider>
          <ApiProvider>
            <CategoriesProvider>
              <ProductsProvider>
                <ProductBuckets>
                  <Pages />
                </ProductBuckets>
              </ProductsProvider>
            </CategoriesProvider>
          </ApiProvider>
        </NotificationsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </ConfigurationProvider>
);

export default App;
