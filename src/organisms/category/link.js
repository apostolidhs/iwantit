import React from 'react';
import Link from 'components/link';
import {useCategorySelector} from 'providers/categories';

const selector = ({slug}) => slug;

const CategoryLink = ({id, ...rest}) => {
  const slug = useCategorySelector(id, selector);
  return <Link to={`/category/${id}/${slug}`} {...rest}></Link>;
};

export default CategoryLink;
