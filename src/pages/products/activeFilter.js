import React, {memo} from 'react';
import {Button, Box} from 'grommet';
import {FormClose} from 'grommet-icons';

const getLabel = ([minValue, maxValue], min, max) => {
  if (minValue > min && maxValue < max) return `${minValue} έως ${maxValue}`;
  if (minValue > min) return `από ${minValue} `;
  return `εώς ${maxValue} `;
};

const ActiveFilter = ({values, min, max, onChange, small, ...rest}) => {
  const onClick = () => onChange([min, max]);
  const label = getLabel(values, min, max);

  return (
    <Button
      {...rest}
      icon={<FormClose size={small ? '16px' : 'medium'} />}
      size="small"
      color="dark-3"
      reverse
      primary
      label={label}
      onClick={onClick}
    />
  );
};

export default memo(ActiveFilter);
