import request from 'helpers/request';

const getNumber = value => (isNaN(value) ? undefined : value);

export default apiUrl => ({
  getCategories: props => request(`${apiUrl}/categories`, props),
  getCategory: (id, props) => request(`${apiUrl}/categories/${id}`, props),
  getProductsByCategory: (id, {page, limit, sort, order, priceMin, priceMax}, props) =>
    request(`${apiUrl}/categories/${id}/products`, {
      params: {
        page,
        limit,
        sort,
        order: order ? 'asc' : 'desc',
        min_price: getNumber(priceMin),
        max_price: getNumber(priceMax),
        limit: 15
      },
      ...props
    }),
  getProduct: (id, props) => request(`${apiUrl}/products/${id}`, props)
});
