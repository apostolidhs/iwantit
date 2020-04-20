import React from 'react';
import {Box} from 'grommet';
import {useProductSelector} from 'providers/products';
import Excerpt from 'components/excerpt';
import Price from 'components/price';

const selector = ({price, excerpt}) => ({price, excerpt});

const Info = ({id}) => {
  const {price, excerpt} = useProductSelector(id, selector);

  return (
    <Box gridArea="info" gap="medium">
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
      <Price gridArea="price" weight="bold">
        {price}
      </Price>
    </Box>
  );
};

export default Info;
