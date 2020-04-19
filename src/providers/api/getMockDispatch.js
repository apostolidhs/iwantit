import toCamelCase from 'helpers/request/toCamelCase';

const makeResponse = response => new Promise(r => setTimeout(() => r({data: toCamelCase(response.default)}), 1));

export default () => ({
  getCategories: () => import('fixtures/categories').then(makeResponse),
  getCategory: () => import('fixtures/category').then(makeResponse),
  getProductsByCategory: () => import('fixtures/products').then(makeResponse),
  getProduct: () => import('fixtures/product').then(makeResponse)
});
