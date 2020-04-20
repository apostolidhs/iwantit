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
import withResponsive from 'components/withResponsive';
import Breadcrumb from 'components/breadcrumb';
import ProductTeaser from 'organisms/productTeaser';
import Skeleton from 'organisms/productTeaser/skeleton';
import useToggle from 'hooks/useToggle';
import Sorting from './sorting';
import useQueryparams from './useQueryParams';
import FilterOverlay from './filterOverlay';
import Title from './title';
import ActiveFilter from './activeFilter';
import FilterButton from './filterButton';
import NoResults from './noResults';
import NotFound from './notFound';

const loadingCards = [...Array(15)];

const Container = withResponsive(Box);

const CardContainer = styled(Grid)`
  grid-auto-rows: ${({isSmall}) => (isSmall ? 280 : 430)}px;
  width: 100%;
`;

const categorySelector = ({loaded: categoryLoaded, exists, productsCount, priceMin, priceMax}) => ({
  categoryLoaded,
  exists,
  productsCount,
  priceMin,
  priceMax
});

const bucketSelector = ({ids, loaded: bucketLoaded, loading}) => ({ids, bucketLoaded, loading});

const getPrice = (value, defaultValue) => (isNaN(value) ? defaultValue : value);

const Products = ({id}) => {
  const [showFilters, filtersOn, filtersOff] = useToggle();
  const {isSmall, isMedium} = useScreenSize();
  const categoryDispatch = useCategoryDispatch();
  const {categoryLoaded, exists, productsCount, priceMin, priceMax} = useCategorySelector(id, categorySelector);

  const {priceRange, sort, order, page, onPrice, onSort, onPage} = useQueryparams(categoryLoaded, {
    priceMin,
    priceMax
  });

  useEffect(() => {
    if (!categoryLoaded) categoryDispatch(categoryActions.fetchCategory(id));
  }, []);

  const bucketParams = {categoryId: id, page, sort, order, priceMin: priceRange[0], priceMax: priceRange[1]};
  const {ids, bucketLoaded, loading} = useBucketParamsSelector(bucketParams, bucketSelector);
  const bucketsDispatch = useBucketsDispatch();

  useEffect(() => {
    if (!loading && !bucketLoaded) bucketsDispatch(bucketActions.fetchBucket(id, bucketParams));
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
  const hasResults = ids.length > 0;

  if (!categoryLoaded && !exists) {
    return (
      <Container gap="medium" pad="small">
        <NotFound />
      </Container>
    );
  }

  return (
    <Container gap="medium" pad="small">
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

      <Box direction="row">
        <CardContainer
          columns={{
            count: isSmall ? 1 : isMedium ? 3 : 4,
            size: 'auto'
          }}
          isSmall={isSmall}
          gap="small">
          {ids.map(productId => (
            <ProductTeaser key={productId} id={productId} />
          ))}
          {loading && loadingCards.map((v, index) => <Skeleton key={index} isSmall={isSmall} />)}
        </CardContainer>
      </Box>

      {bucketLoaded && ids.length === 0 && <NoResults id={id} />}

      {hasResults && (
        <Box direction="row" justify="center" margin={{top: 'small'}}>
          <Pagination total={productsCount} page={page} onPage={onPage} />
        </Box>
      )}

      {isSmall && showFilters && <FilterOverlay onClose={filtersOff} {...priceProps} />}
    </Container>
  );
};

export default Products;
