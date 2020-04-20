import React from 'react';
import {Box, Heading} from 'grommet';
import styled from 'styled-components';
import Link from 'components/link';
import Image from 'components/image';
import Excerpt from 'components/excerpt';
import Price from 'components/price';
import {useProductSelector} from 'providers/products';

const ImageContainer = styled(Link)`
  height: 100%;
`;

const selector = ({imageUrl, title, price, excerpt, slugPath}) => ({imageUrl, title, price, excerpt, slugPath});

const ProductTeaser = ({id, noExcerpt, ...rest}) => {
  const {imageUrl, title, price, excerpt, slugPath} = useProductSelector(id, selector);
  const to = `/product/${slugPath}`;

  return (
    <Box background="white" pad="medium" gap="small" round="2px" title={title} {...rest}>
      <Box flex="grow" basis="0">
        <ImageContainer to={to}>
          <Image src={imageUrl} fill fit="contain" />
        </ImageContainer>
      </Box>
      <Box flex="grow" justify="between" basis="0">
        <Box>
          <Link to={to}>
            <Heading level="3" size="small" margin="none">
              {title}
            </Heading>
          </Link>
          {excerpt && !noExcerpt && <Excerpt short>{excerpt}</Excerpt>}
        </Box>
        <Link to={to}>
          <Price weight="bold">{price}</Price>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductTeaser;
