import request from 'helpers/request';

export default apiUrl => ({
  getCategories: props => request.get(`${apiUrl}/categories`, props)
});
