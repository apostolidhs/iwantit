import {useMemo} from 'react';
import queryString from 'query-string';
import {navigate} from '@reach/router';

const getNumber = (value, defaultValue) => {
  const number = +value;
  return isNaN(number) ? defaultValue : Math.floor(number);
};

const updateParams = dispatch => {
  const parsed = queryString.parse(location.search);
  const query = queryString.stringify({...parsed, ...dispatch(parsed)}, {skipNull: true});
  navigate(`${window.location.pathname}?${query}`, {replace: true});
};

const useParams = (enabled, {priceMin, priceMax}) =>
  useMemo(() => {
    const {priceMin: priceMinValue, priceMax: priceMaxValue, sort, order, page} = queryString.parse(location.search);
    const priceMinRange = getNumber(priceMinValue, priceMin);
    const priceMaxRange = getNumber(priceMaxValue, priceMax);
    const priceRange = priceMinRange > priceMaxRange ? [0, 0] : [priceMinRange, priceMaxRange];

    return {
      priceRange,
      sort: !sort || sort === 'price' ? 'price' : null,
      order: order === 'asc',
      page: page ? getNumber(page, 0) : 1
    };
  }, [location.search]);

const useDispatches = (enabled, {priceMin, priceMax}) =>
  useMemo(
    () => ({
      onPrice: ([min, max]) => {
        if (min > max) return;
        updateParams(() => ({
          priceMin: min === priceMin ? null : escape(min),
          priceMax: max === priceMax ? null : escape(max)
        }));
      },

      onSort: (sort, order) => {
        if (sort !== 'price') return;
        const add = value => (order ? value : null);
        updateParams(() => ({
          sort: add(escape(sort)),
          order: add(order ? 'asc' : 'desc')
        }));
      },

      onPage: page => updateParams(() => ({page: page === 1 ? null : page}))
    }),
    [enabled]
  );

export default (enabled, {priceMin = 0, priceMax = 0}) => {
  const params = useParams(enabled, {priceMin, priceMax});
  const dispatches = useDispatches(enabled, {priceMin, priceMax});

  return {...params, ...dispatches};
};
