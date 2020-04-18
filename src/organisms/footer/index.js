import React from 'react';
import {Footer as GFooter, Anchor} from 'grommet';
import {Favorite} from 'grommet-icons';
import Logo from 'components/logo';

const Footer = () => (
  <GFooter background="dark-1" pad="large">
    <Logo color="white" />
    <Anchor
      icon={<Favorite color="brand" />}
      color="white"
      label="Made with love"
      target="_blank"
      href="#https://github.com/apostolidhs/iwantit"
    />
  </GFooter>
);

export default Footer;
