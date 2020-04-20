import React from 'react';
import {useIntl} from 'providers/localization';
import {Button} from 'grommet';
import {Filter} from 'grommet-icons';

const FilterButton = ({enabled, ...rest}) => {
  const intl = useIntl();
  return (
    <Button
      primary={enabled}
      icon={<Filter size="16px" />}
      size="small"
      gap="xxsmall"
      label={intl('filters.label')}
      {...rest}
    />
  );
};

export default FilterButton;
