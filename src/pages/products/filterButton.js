import React from 'react';
import {Button} from 'grommet';
import {Filter} from 'grommet-icons';

const FilterButton = ({enabled, ...rest}) => (
  <Button primary={enabled} icon={<Filter size="16px" />} size="small" gap="xxsmall" label="φίλτρα" {...rest} />
);

export default FilterButton;
