import React from 'react';
import {Box, Heading, Text} from 'grommet';
import {useCategorySelector} from 'providers/categories';
import Link from 'components/link';

const selector = ({title, slug, productsCount}) => ({title, slug, productsCount});

const NoResults = ({id}) => {
  const {title, slug} = useCategorySelector(id, selector);
  return (
    <Box>
      <Heading>Δεν βρέθηκαν προϊόντα</Heading>
      <Text>
        Δες όλα τα προϊόντα της{' '}
        <Link to={`/category/${id}/${slug}`}>
          <Text color="neutral-3">κατηγορίας {title}</Text>
        </Link>
      </Text>
    </Box>
  );
};

export default NoResults;
