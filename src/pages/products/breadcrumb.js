import React from 'react';
import Link from 'components/link';
import {Text, Box} from 'grommet';

const Breadcrumb = props => (
  <Box {...props}>
    <Link to="/">
      <Text size="small" color="dark-3">
        Αρχική
      </Text>
    </Link>
  </Box>
);

export default Breadcrumb;
