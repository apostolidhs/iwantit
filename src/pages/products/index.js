import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Link from 'components/link';
import {Box, Text, Heading, Grid} from 'grommet';
import {useScreenSize} from 'providers/theme';
import {useCategorySelector, useCategoryDispatch} from 'providers/categories';
import {useBucketParamsSelector, useBucketsDispatch} from 'providers/productBuckets';
import * as categoryActions from 'providers/categories/actions';
import * as bucketActions from 'providers/productBuckets/actions';
import Range from 'components/range';
import Pagination from 'components/pagination';
import ProductTeaser from 'organisms/productTeaser';
import Skeleton from 'organisms/productTeaser/skeleton';
import Sorting from './sorting';
import useQueryparams from './useQueryParams';

// import * as actions from 'providers/productBuckets/actions';

const loadingCards = [...Array(15)];

const Container = styled(Box)`
  width: 100%;
  max-width: ${({theme, isSmall}) => (isSmall ? '100%' : theme.global.size.xxlarge)};
`;

const CardContainer = styled(Grid)`
  grid-auto-rows: 415px;
  width: 100%;
  /*
  max-width: ${({theme, isSmall}) => (isSmall ? '100%' : theme.global.size['xxlarge'])}; */
`;

const Products = ({categoryId}) => {
  const {isSmall, isMedium} = useScreenSize();
  const categoryDispatch = useCategoryDispatch();
  const {title, loaded: categoryLoaded, productsCount, priceMin, priceMax} = useCategorySelector(categoryId);

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

  return (
    <Container isSmall={isSmall}>
      <Link to="/">
        <Text size="small" color="dark-3">
          Αρχική
        </Text>
      </Link>
      <Box direction="row" justify="between" margin={{top: 'medium'}}>
        <Box direction="row" gap="small" align="baseline">
          <Heading level="2" margin="none">
            {title}
          </Heading>
          <Text color="dark-3" size="small">
            {productsCount} προϊόντα
          </Text>
        </Box>
        <Range values={priceRange} min={priceMin} onChange={onPrice} max={priceMax} label="Τιμή" id="priceFilter" />
      </Box>
      <Box direction="row" justify="between" align="end" margin={{top: 'large'}}>
        <Sorting direction={order} onSort={onSort} />
        <Pagination total={productsCount} current={page} onPage={onPage} />
      </Box>
      <Box direction="row" margin={{top: 'medium'}}>
        <CardContainer
          columns={{
            count: isSmall ? 1 : isMedium ? 3 : 4,
            size: 'auto'
          }}
          gap="small">
          {ids.map(id => (
            <ProductTeaser key={id} id={id} />
          ))}
          {bucketLoaded && ids.length === 0 && 'No results'}
          {loading && loadingCards.map((v, index) => <Skeleton key={index} isSmall={isSmall} />)}
        </CardContainer>
      </Box>
      <Box direction="row" justify="center" margin={{top: 'large'}}>
        <Pagination total={productsCount} current={page} onPage={onPage} />
      </Box>
    </Container>
  );
};

export default Products;
