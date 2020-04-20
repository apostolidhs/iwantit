import React, {Suspense, lazy} from 'react';
import {Router} from '@reach/router';
import {Main, Box} from 'grommet';
import Header from 'organisms/header';
import Footer from 'organisms/footer';
import {useConfiguration} from 'providers/configuration';

const Categories = lazy(() => import(/* webpackChunkName: 'page.categories' */ './categories'));
const Products = lazy(() => import(/* webpackChunkName: 'page.products' */ './products'));
const Product = lazy(() => import(/* webpackChunkName: 'page.product' */ './product'));
const NotFound = lazy(() => import(/* webpackChunkName: 'page.notfound' */ './notFound'));

const Page = () => {
  const {basepath} = useConfiguration();

  return (
    <Box height="100%">
      <Header />
      <Box as="main" background="light-1" flex="grow">
        <Suspense fallback={null}>
          <Router component={Box} align="center" flex="grow" pad="medium" basepath={basepath} data-testid="router">
            <Categories path="/" />
            <Products path="/category/:id/*" />
            <Product path="/product/:id/*" />

            <NotFound default />
          </Router>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;
