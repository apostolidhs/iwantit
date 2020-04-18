import React from 'react';
import {Box, Heading} from 'grommet';
import Link from 'components/link';
import {useCategorySelector} from 'providers/categories';

const selector = ({imageUrl, title}) => ({imageUrl, title});

const Category = ({id, ...rest}) => {
  const {imageUrl, title} = useCategorySelector(id, selector);

  return (
    <Box
      as={Link}
      to={`category/${id}`}
      background={{image: `url(${imageUrl})`, size: 'auto 70%', position: 'center 15px', color: 'white'}}
      justify="end"
      align="center"
      pad="medium"
      round="2px"
      {...rest}>
      <Heading level="3" margin="none">
        {title}
      </Heading>
    </Box>
  );
};

export default Category;
