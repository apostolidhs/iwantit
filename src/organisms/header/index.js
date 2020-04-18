import React from 'react';
import {Header as GHeader} from 'grommet';
import Logo from 'components/logo';

const Header = () => (
  <GHeader background="dark-1" justify="center" pad={'medium'}>
    <Logo color="white" />
  </GHeader>
);

export default Header;
