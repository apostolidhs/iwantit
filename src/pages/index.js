import React, {Suspense, lazy} from 'react';
import {Router} from '@reach/router';
import {useConfiguration} from 'providers/configuration';

const Categories = lazy(() => import(/* webpackChunkName: 'page.categories' */ './categories'));
const Products = lazy(() => import(/* webpackChunkName: 'page.products' */ './products'));
const Product = lazy(() => import(/* webpackChunkName: 'page.product' */ './product'));
const NotFound = lazy(() => import(/* webpackChunkName: 'page.notfound' */ './notFound'));

const Page = () => {
  const {basepath} = useConfiguration();

  return (
    <Suspense fallback={null}>
      <Router basepath={basepath} data-testid="router">
        <Categories path="/" />
        <Products path="/category/:categoryId" />
        <Product path="/product/:id" />

        <NotFound default />
      </Router>
    </Suspense>
  );
};

export default Page;
