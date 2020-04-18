import React from 'react';
import {Heading} from 'grommet';
import Link from 'components/link';

const Logo = props => (
  <Link to="/">
    <Heading level="2" margin="none" {...props}>
      I Want It
    </Heading>
  </Link>
);

export default Logo;
