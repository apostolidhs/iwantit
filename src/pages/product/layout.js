import React from 'react';
import {Grid} from 'grommet';
import {useScreenSize} from 'providers/theme';

const smallLayout = {
  rows: ['1fr'],
  columns: ['1fr'],
  areas: [['details'], ['image'], ['info'], ['description']],
  gap: 'medium'
};

const defaultLayout = {
  rows: ['medium', 'flex'],
  columns: ['1fr', '1fr'],
  areas: [
    ['image', 'details'],
    ['description', 'description']
  ],
  gap: 'large',
  fill: true
};

const Layout = props => {
  const {isSmall} = useScreenSize();
  return <Grid {...(isSmall ? smallLayout : defaultLayout)} {...props} />;
};

export default Layout;
