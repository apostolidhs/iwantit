import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Box, Heading, Text} from 'grommet';
import {useCategorySelector} from 'providers/categories';
import Link from 'components/link';

const selector = ({title, slug, productsCount}) => ({title, slug, productsCount});

const NoResults = ({id}) => {
  const {title, slug} = useCategorySelector(id, selector);

  return (
    <Box>
      <Heading>
        <FormattedMessage id="pages.products.noResults" />
      </Heading>
      <Text>
        <FormattedMessage id="pages.products.noResults.details" />{' '}
        <Link to={`/category/${id}/${slug}`}>
          <Text color="neutral-3">
            <FormattedMessage id="pages.products.noResults.details.link" values={{title}} />
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default NoResults;
