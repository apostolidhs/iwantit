import React, {memo} from 'react';
import {Text} from 'grommet';

const formatter = new Intl.NumberFormat('el', {
  style: 'currency',
  currency: 'EUR'
});

const Price = ({children, ...rest}) => <Text {...rest}>{formatter.format(children / 100)}</Text>;

export default memo(Price);
