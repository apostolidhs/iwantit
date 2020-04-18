import camelCase from 'lodash/camelCase';

const toCamelCase = data => {
  if (Array.isArray(data)) return data.map(value => toCamelCase(value));
  if (typeof data === 'object')
    return Object.keys(data).reduce((h, key) => ({...h, [camelCase(key)]: toCamelCase(data[key])}), {});

  return data;
};

export default toCamelCase;
