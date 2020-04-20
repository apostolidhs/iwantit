import React, {useEffect} from 'react';
import {Box, Heading} from 'grommet';
import {useScreenSize} from 'providers/theme';
import {useProductSelector, useProductsDispatch} from 'providers/products';
import * as actions from 'providers/products/actions';
import Image from 'components/image';
import withResponsive from 'components/withResponsive';
import Breadcrumb from 'components/breadcrumb';
import Info from './info';
import Layout from './layout';
import Skeleton from './skeleton';
import NotFound from './notFound';
import Related from './related';
import useRelated from './useRelated';

const Container = withResponsive(Box);

const selector = ({loading, loaded, exists, imageUrl, title, description, categoryId}) => ({
  loading,
  loaded,
  exists,
  imageUrl,
  title,
  description,
  categoryId
});

const Product = ({id}) => {
  const {isSmall} = useScreenSize();
  const dispatch = useProductsDispatch();
  const {loading, loaded, exists, imageUrl, title, description, categoryId} = useProductSelector(id, selector);

  const relatedIds = useRelated(id, categoryId);

  useEffect(() => {
    if (loaded) return;

    dispatch(actions.fetchProduct(id));
  }, [id]);

  return (
    <Container maxSize="xlarge" gap="medium">
      <Breadcrumb categoryId={categoryId} margin={{bottom: 'medium'}} />
      {!loaded && !exists && <NotFound />}
      {loading && !loaded && <Skeleton />}
      {loaded && exists && (
        <Layout>
          <Box gridArea="image" align="center">
            <Box height={{max: '400px'}} width={isSmall ? '50%' : null}>
              {imageUrl && <Image src={imageUrl} fill fit="contain" />}
            </Box>
          </Box>
          <Box gridArea="details" gap="small" justify="center" width={isSmall ? null : {max: 'medium'}}>
            <Heading level="3" margin="none">
              {title}
            </Heading>
            {!isSmall && <Info id={id} />}
          </Box>
          {isSmall && <Info id={id} />}
          {description && (
            <Box gridArea="description" align="center">
              <Box dangerouslySetInnerHTML={{__html: description}} width={{max: 'large'}}></Box>
            </Box>
          )}
          {relatedIds.length > 0 && <Related ids={relatedIds} />}
        </Layout>
      )}
    </Container>
  );
};

export default Product;
