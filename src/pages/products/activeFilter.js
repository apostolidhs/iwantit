import React, {memo} from 'react';
import {Button, Box} from 'grommet';
import {FormClose} from 'grommet-icons';
import {useIntl} from 'providers/localization';

const format = value => Math.round(value / 100);

const getLabel = ([minValue, maxValue], min, max) => {
  if (minValue > min && maxValue < max)
    return ['activeFilter.price.both', {minValue: format(minValue), maxValue: format(maxValue)}];

  if (minValue > min) return ['activeFilter.price.min', {minValue: format(minValue)}];

  return ['activeFilter.price.max', {maxValue: format(maxValue)}];
};

const ActiveFilter = ({values, min, max, onChange, small, ...rest}) => {
  const intl = useIntl();

  const onClick = () => onChange([min, max]);
  const [id, labelValues] = getLabel(values, min, max);

  return (
    <Button
      {...rest}
      icon={<FormClose size={small ? '16px' : 'medium'} />}
      size="small"
      color="dark-3"
      reverse
      primary
      label={intl(id, labelValues)}
      onClick={onClick}
    />
  );
};

export default memo(ActiveFilter);
