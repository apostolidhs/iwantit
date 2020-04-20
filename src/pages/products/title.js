import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Box, Text, Heading} from 'grommet';
import {useCategorySelector} from 'providers/categories';

const selector = ({title, productsCount}) => ({title, productsCount});

const Title = ({id, ...rest}) => {
  const {title, productsCount} = useCategorySelector(id, selector);

  return (
    <Box direction="row" gap="small" align="baseline" {...rest}>
      <Heading level="2" margin="none">
        {title}
      </Heading>
      <Text color="dark-3" size="small">
        <FormattedMessage id="pages.products.quantity" values={{productsCount}} />
      </Text>
    </Box>
  );
};

export default Title;
