import React from 'react';
import {Box, Heading} from 'grommet';
import Link from 'components/link';
import {useCategorySelector} from 'providers/categories';

const selector = ({imageUrl, title, slug}) => ({imageUrl, title, slug});

const Category = ({id, ...rest}) => {
  const {imageUrl, title, slug} = useCategorySelector(id, selector);

  return (
    <Box
      as={Link}
      to={`category/${id}/${slug}`}
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
