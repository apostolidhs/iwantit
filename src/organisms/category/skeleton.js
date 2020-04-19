import React from 'react';
import {Box} from 'grommet';
import SkeletonComponent from 'components/skeleton';

const Skeleton = props => (
  <Box background={{color: 'white'}} justify="end" align="center" pad="medium" round="2px" {...props}>
    <SkeletonComponent width="40%" height="60%" />
    <SkeletonComponent width="80%" />
  </Box>
);

export default Skeleton;
