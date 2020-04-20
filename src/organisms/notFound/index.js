import React from 'react';
import {Box, Heading, Text} from 'grommet';
import Link from 'components/link';

const NotFound = ({children}) => (
  <Box>
    <Heading>{children}</Heading>
    <Text>
      Δες όλες τις{' '}
      <Link to="/">
        <Text color="neutral-3">κατηγορίες προϊόντων</Text>
      </Link>
    </Text>
  </Box>
);

export default NotFound;
