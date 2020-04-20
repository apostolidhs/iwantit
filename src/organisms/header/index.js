import React from 'react';
import {Header as GHeader} from 'grommet';
import {useScreenSize} from 'providers/theme';
import Logo from 'components/logo';

const Header = () => {
  const {isSmall} = useScreenSize();

  return (
    <GHeader background="dark-1" justify="center" pad={isSmall ? 'large' : 'medium'}>
      <Logo color="white" />
    </GHeader>
  );
};

export default Header;
