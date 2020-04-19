import React from 'react';
import {Box, Heading} from 'grommet';
import {useCategorySelector} from 'providers/categories';
import Link from './link';

const selector = ({imageUrl, title}) => ({imageUrl, title});

const Category = ({id, ...rest}) => {
  const {imageUrl, title} = useCategorySelector(id, selector);

  return (
    <Box
      as={Link}
      id={id}
      background={{image: `url(${imageUrl})`, size: 'auto 70%', position: 'center 15px', color: 'white'}}
      justify="end"
      align="center"
      pad="medium"
      round="2px"
      title={title}
      {...rest}>
      <Heading level="3" margin="none">
        {title}
      </Heading>
    </Box>
  );
};

export default Category;
