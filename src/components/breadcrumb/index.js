import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import Link from 'components/link';
import CategoryLink from 'organisms/category/link';
import {Text, Box} from 'grommet';
import {useCategorySelector} from 'providers/categories';

const selector = ({title}) => title;

const Category = ({id}) => {
  const title = useCategorySelector(id, selector);

  return (
    <CategoryLink id={id}>
      <Text size="small" color="dark-3">
        {title}
      </Text>
    </CategoryLink>
  );
};

const Breadcrumb = ({categoryId, ...rest}) => (
  <Box direction="row" {...rest}>
    <Link to="/">
      <Text size="small" color="dark-3">
        <FormattedMessage id="breadcrumb.landing" />
      </Text>
    </Link>
    {categoryId && (
      <Fragment>
        <Text alignSelf="end" size="small" color="dark-3" margin={{horizontal: 'xsmall'}}>
          /
        </Text>
        <Category id={categoryId} />
      </Fragment>
    )}
  </Box>
);

export default Breadcrumb;
