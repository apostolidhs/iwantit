import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Box, Grid} from 'grommet';
import {useScreenSize} from 'providers/theme';
import {useCategorySelector, useCategoryDispatch} from 'providers/categories';
import {useBucketParamsSelector, useBucketsDispatch} from 'providers/productBuckets';
import * as categoryActions from 'providers/categories/actions';
import * as bucketActions from 'providers/productBuckets/actions';
import Range from 'components/range';
import Pagination from 'components/pagination';
import ProductTeaser from 'organisms/productTeaser';
import Skeleton from 'organisms/productTeaser/skeleton';
import useToggle from 'hooks/useToggle';
import Sorting from './sorting';
import useQueryparams from './useQueryParams';
import FilterOverlay from './filterOverlay';
import Breadcrumb from './breadcrumb';
import Title from './title';
import ActiveFilter from './activeFilter';
import FilterButton from './filterButton';

const loadingCards = [...Array(15)];

const Container = styled(Box)`
  width: 100%;
  max-width: ${({theme, isSmall}) => (isSmall ? '100%' : theme.global.size.xxlarge)};
`;

const CardContainer = styled(Grid)`
  grid-auto-rows: ${({isSmall}) => (isSmall ? 280 : 415)}px;
  width: 100%;
`;

const getPrice = (value, defaultValue) => (isNaN(value) ? defaultValue : value);

const Products = ({categoryId}) => {
  const [showFilters, filtersOn, filtersOff] = useToggle();
  const {isSmall, isMedium} = useScreenSize();
  const categoryDispatch = useCategoryDispatch();
  const {loaded: categoryLoaded, productsCount, priceMin, priceMax} = useCategorySelector(categoryId);

  const {priceRange, sort, order, page, onPrice, onSort, onPage} = useQueryparams(categoryLoaded, {
    priceMin,
    priceMax,
    productsCount
  });

  useEffect(() => {
    if (categoryLoaded) return;
    categoryDispatch(categoryActions.fetchCategory(categoryId));
  }, []);

  const bucketParams = {categoryId, page, sort, order, priceMin: priceRange[0], priceMax: priceRange[1]};
  const {ids, loaded: bucketLoaded, loading} = useBucketParamsSelector(bucketParams);
  const bucketsDispatch = useBucketsDispatch();

  useEffect(() => {
    if (loading || bucketLoaded) return;

    bucketsDispatch(bucketActions.fetchBucket(categoryId, bucketParams));
  }, [loading, bucketLoaded]);

  const priceProps = {
    values: [getPrice(priceRange[0], priceMin), getPrice(priceRange[1], priceMax)],
    min: priceMin,
    onChange: onPrice,
    max: priceMax,
    label: 'Τιμή',
    id: 'priceFilter'
  };
  const hasFilter = priceProps.values[0] > priceMin || priceProps.values[1] < priceMax;

  return (
    <Container isSmall={isSmall} gap="medium">
      <Breadcrumb />

      <Box direction="row" justify="between" margin={{bottom: 'small'}}>
        <Title id={categoryId} />
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
        {!isSmall && <Pagination total={productsCount} page={page} onPage={onPage} />}
      </Box>

      {isSmall && page > 1 && (
        <Box direction="row" justify="center" margin={{top: 'small'}}>
          <Pagination total={productsCount} page={page} onPage={onPage} up />
        </Box>
      )}

      <Box direction="row">
        <CardContainer
          columns={{
            count: isSmall ? 1 : isMedium ? 3 : 4,
            size: 'auto'
          }}
          isSmall={isSmall}
          gap="small">
          {ids.map(id => (
            <ProductTeaser key={id} id={id} />
          ))}
          {bucketLoaded && ids.length === 0 && 'No results'}
          {loading && loadingCards.map((v, index) => <Skeleton key={index} isSmall={isSmall} />)}
        </CardContainer>
      </Box>

      <Box direction="row" justify="center" margin={{top: 'small'}}>
        <Pagination total={productsCount} page={page} onPage={onPage} />
      </Box>

      {isSmall && showFilters && <FilterOverlay onClose={filtersOff} {...priceProps} />}
    </Container>
  );
};

export default Products;
