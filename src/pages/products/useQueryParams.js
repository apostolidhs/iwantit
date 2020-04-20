import {useMemo, useState, useEffect, useCallback} from 'react';
import queryString from 'query-string';
import debounce from 'lodash/debounce';
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

const useParams = () => {
  const params = useMemo(() => {
    const {priceMin: priceMinValue, priceMax: priceMaxValue, sort, order, page} = queryString.parse(location.search);
    const priceMinRange = getNumber(priceMinValue, NaN);
    const priceMaxRange = getNumber(priceMaxValue, NaN);

    return {
      priceRange: priceMinRange > priceMaxRange ? [0, 0] : [priceMinRange, priceMaxRange],
      sort: !sort || sort === 'price' ? 'price' : null,
      order: order === 'asc',
      page: page ? getNumber(page, 0) : 1
    };
  }, [location.search]);

  return params;
};

const useDispatches = (enabled, {setPriceRange, priceMin, priceMax}) => {
  const setDeferredPriceRange = useMemo(
    () =>
      debounce(
        ([min, max], nextPriceMin, nextPriceMax) =>
          updateParams(() => ({
            priceMin: min === nextPriceMin ? null : escape(min),
            priceMax: max === nextPriceMax ? null : escape(max)
          })),
        300
      ),
    []
  );

  useEffect(() => () => setDeferredPriceRange.flush(), []);

  return useMemo(
    () => ({
      onPrice: value => {
        const [min, max] = value;
        if (min > max) return;

        setPriceRange([min === priceMin ? NaN : min, max === priceMax ? NaN : max]);
        setDeferredPriceRange(value, priceMin, priceMax);
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
};

export default (enabled, {priceMin = 0, priceMax = 0}) => {
  const params = useParams();
  const [priceRange, setPriceRange] = useState(params.priceRange);

  const dispatches = useDispatches(enabled, {setPriceRange, priceMin, priceMax});

  return {...params, priceRange, ...dispatches};
};
