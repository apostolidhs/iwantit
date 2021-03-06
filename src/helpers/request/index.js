import identity from 'lodash/identity';
import toCamelCase from './toCamelCase';

const getParams = params =>
  Object.keys(params)
    .filter(k => params[k] !== undefined)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

export default (href, {params, transform = identity, method = 'GET', headers, ...options} = {}) => {
  const controller = new AbortController();

  const search = params && getParams(params);
  const link = search ? `${href}?${search}` : href;
  const request = fetch(link, {
    signal: controller.signal,
    method,
    headers: {'Content-Type': 'application/json', ...headers},
    ...options
  })
    .catch(error => {
      error.status = -1;
      error.statusText = error.name;
      return error;
    })
    .then(response =>
      response.status === -1
        ? {response}
        : response
            .json()
            .catch(e => null)
            .then(data => ({data, response}))
    )
    .then(({data, response}) => {
      const {status, statusText} = response;
      if (response.ok) return {data: transform(toCamelCase(data)), status, statusText};
      throw {data, status, statusText};
    });

  request.abort = () => {
    controller.abort();
  };

  return request;
};
