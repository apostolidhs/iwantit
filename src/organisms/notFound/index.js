import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Box, Heading, Text} from 'grommet';
import Link from 'components/link';

const NotFound = ({children}) => (
  <Box>
    <Heading>{children}</Heading>
    <Text>
      <FormattedMessage id="notFound.title" />{' '}
      <Link to="/">
        <Text color="neutral-3">
          <FormattedMessage id="notFound.link" />
        </Text>
      </Link>
    </Text>
  </Box>
);

export default NotFound;
