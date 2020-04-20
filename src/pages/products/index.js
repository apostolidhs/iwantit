import React, {useEffect, useCallback} from 'react';
import {useIntl} from 'providers/localization';
import {Box} from 'grommet';
import {useScreenSize} from 'providers/theme';
import {useCategorySelector, useCategoryDispatch} from 'providers/categories';
import * as categoryActions from 'providers/categories/actions';
import Range from 'components/range';
import Pagination from 'components/pagination';
import withResponsive from 'components/withResponsive';
import Breadcrumb from 'components/breadcrumb';
import Virtualized from 'components/virtualized';
import useToggle from 'hooks/useToggle';
import Sorting from './sorting';
import useQueryparams from './useQueryParams';
import FilterOverlay from './filterOverlay';
import Title from './title';
import ActiveFilter from './activeFilter';
import FilterButton from './filterButton';
import NoResults from './noResults';
import NotFound from './notFound';
import useVirtualized from './useVirtulized';

const Container = withResponsive(Box);

const categorySelector = ({loaded: categoryLoaded, exists, productsCount, priceMin, priceMax}) => ({
  categoryLoaded,
  exists,
  productsCount,
  priceMin,
  priceMax
});

const getPrice = (value, defaultValue) => (isNaN(value) ? defaultValue : value);

const Products = ({id}) => {
  const intl = useIntl();

  const [showFilters, filtersOn, filtersOff] = useToggle();
  const {isSmall} = useScreenSize();
  const dispatch = useCategoryDispatch();
  const {categoryLoaded, exists, productsCount, priceMin, priceMax} = useCategorySelector(id, categorySelector);

  const {priceRange, sort, order, page, onPrice, onSort, onPage} = useQueryparams(categoryLoaded, {
    priceMin,
    priceMax
  });

  useEffect(() => {
    if (!categoryLoaded) dispatch(categoryActions.fetchCategory(id));
  }, []);

  const priceProps = {
    values: [getPrice(priceRange[0], priceMin), getPrice(priceRange[1], priceMax)],
    min: priceMin,
    onChange: onPrice,
    max: priceMax,
    label: intl('filters.price.label'),
    id: 'priceFilter'
  };

  const hasFilter = priceProps.values[0] > priceMin || priceProps.values[1] < priceMax;

  const bucketParams = {categoryId: id, page, sort, order, priceMin: priceRange[0], priceMax: priceRange[1]};
  const {total, bucketLoaded, hasResults, rowHeight, totalHeight, rowRenderer} = useVirtualized(bucketParams);

  const onButtomPage = useCallback(
    page => {
      window.scrollTo(0, 0);
      onPage(page);
    },
    [onPage]
  );

  if (!categoryLoaded && !exists) {
    return (
      <Container gap="medium" pad="small">
        <NotFound />
      </Container>
    );
  }

  return (
    <Container gap="medium" pad="small" flex="grow">
      <Breadcrumb />

      <Box direction="row" justify="between" margin={{bottom: 'small', top: 'medium'}}>
        <Title id={id} />
        {!isSmall && <Range {...priceProps} />}
      </Box>

      {hasFilter && isSmall && (
        <Box direction="row">
          <ActiveFilter small {...priceProps} />
        </Box>
      )}

      <Box direction="row" justify="between" align="end">
        <Box direction="row" gap="small">
          <Sorting direction={order} onSort={onSort} />
          {!isSmall && hasFilter && <ActiveFilter {...priceProps} />}
        </Box>
        {isSmall && <FilterButton enabled={hasFilter} onClick={filtersOn} />}
        {!isSmall && hasResults && <Pagination total={productsCount} page={page} onPage={onPage} />}
      </Box>

      {isSmall && hasResults && page > 1 && (
        <Box direction="row" justify="center" margin={{top: 'small'}}>
          <Pagination total={productsCount} page={page} onPage={onPage} up />
        </Box>
      )}

      <Box height={`${totalHeight}px`}>
        <Virtualized rowHeight={rowHeight} total={total} rowRenderer={rowRenderer} />
      </Box>

      {bucketLoaded && !hasResults && <NoResults id={id} />}

      {hasResults && (
        <Box direction="row" justify="center" margin={{top: 'small'}}>
          <Pagination total={productsCount} page={page} onPage={onButtomPage} />
        </Box>
      )}

      {isSmall && showFilters && <FilterOverlay onClose={filtersOff} {...priceProps} />}
    </Container>
  );
};

export default Products;
