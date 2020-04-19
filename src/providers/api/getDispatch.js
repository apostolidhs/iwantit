import request from 'helpers/request';

export default apiUrl => ({
  getCategories: props => request(`${apiUrl}/categories`, props),
  getCategory: (id, props) => request(`${apiUrl}/categories/${id}`, props),
  getProductsByCategory: (id, {page, limit, sort, order, minPrice: min_price, maxPrice: max_price}, props) =>
    request(`${apiUrl}/categories/${id}/products`, {
      params: {page, limit, sort, order: order ? 'asc' : 'desc', min_price, max_price, limit: 15},
      ...props
    }),
  getProduct: (id, props) => request(`${apiUrl}/products/${id}`, props)
});
