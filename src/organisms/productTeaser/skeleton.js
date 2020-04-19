import React from 'react';
import {Box} from 'grommet';
import Link from 'components/link';
import SkeletonComponent from 'components/skeleton';

const Skeleton = props => (
  <Box background="white" pad="medium" gap="small" round="2px" {...props}>
    <Box flex="grow" align="center" basis="0">
      <SkeletonComponent height="90%" width="70%" />
    </Box>
    <Box flex="grow" justify="between" basis="0">
      <Box>
        <SkeletonComponent height="28px" width="80%" />
      </Box>
      <SkeletonComponent height="20px" width="70px" />
    </Box>
  </Box>
);

export default Skeleton;
