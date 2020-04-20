import React from 'react';
import {Box, Heading} from 'grommet';
import {FormattedMessage} from 'react-intl';
import {useScreenSize} from 'providers/theme';
import ProductTeaser from 'organisms/productTeaser';

const Related = ({ids, ...rest}) => {
  const {isSmall} = useScreenSize();

  return (
    <Box gridArea="related" gap="small" {...rest}>
      <Heading margin="none" level="4">
        <FormattedMessage id="pages.product.related" />
      </Heading>
      <Box direction="row" gap="small" wrap>
        {ids.map(id => (
          <ProductTeaser
            key={id}
            id={id}
            width={isSmall ? '100%' : {max: '300px'}}
            margin={{bottom: 'small'}}
            height={isSmall ? '200px' : '280px'}
            noExcerpt
          />
        ))}
      </Box>
    </Box>
  );
};

export default Related;
