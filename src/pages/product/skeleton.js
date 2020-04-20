import React from 'react';
import {useScreenSize} from 'providers/theme';
import {Box} from 'grommet';
import SkeletonComponent from 'components/skeleton';
import Layout from './layout';

const sizes = [...Array(4)].map(() => 100);

const Paragraphs = ({isSmall}) => (
  <Box width="100%" align="center">
    {sizes.map((size, index) => (
      <SkeletonComponent key={index} width={isSmall ? `${size}%` : `${size - 20}%`} />
    ))}
  </Box>
);

const Skeleton = () => {
  const {isSmall} = useScreenSize();

  return (
    <Layout>
      <Box gridArea="image" align="center">
        <SkeletonComponent height="370px" width={isSmall ? '50%' : '240px'} />
      </Box>
      <Box gridArea="details" gap="small" justify="center" width={isSmall ? null : {max: 'medium'}}>
        <SkeletonComponent height="40px" />
        {!isSmall && <SkeletonComponent height="24px" gridArea="info" />}
      </Box>
      {isSmall && <SkeletonComponent gridArea="info" />}
      <Box gap="medium" gridArea="description">
        <Paragraphs isSmall={isSmall} />
        <Paragraphs isSmall={isSmall} />
        <Paragraphs isSmall={isSmall} />
      </Box>
    </Layout>
  );
};

export default Skeleton;
