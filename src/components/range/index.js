import React, {memo} from 'react';
import {Box, Stack, RangeSelector, TextInput, Text} from 'grommet';
import styled from 'styled-components';

const NumericContainer = styled(Box)`
  margin-top: ${({theme}) => theme.global.edgeSize.small};

  > * {
    width: 100px;

    input {
      font-weight: initial;
      padding: 6px;
    }
  }
`;

const format = value => Math.round(value / 100);

const Range = ({id, values: [minValue, maxValue], min, max, onChange, label, ...rest}) => {
  const formateedMin = format(min);
  const formateedMax = format(max);
  const formattedValues = [format(minValue), format(maxValue)];

  const change = ([nextMin, nextMax]) => onChange([nextMin * 100, nextMax * 100]);

  return (
    <Box gap="medium" width="medium" direction="row" {...rest}>
      <Text as="label" htmlFor={id}>
        {label}
      </Text>
      <Box flex="grow">
        <Stack>
          <Box border={{color: 'light-3'}} />
          <RangeSelector
            id={id}
            values={formattedValues}
            onChange={change}
            min={formateedMin}
            max={formateedMax}
            round="xsmall"
            size="xxsmall"
          />
        </Stack>
        <NumericContainer justify="between" direction="row">
          <TextInput
            type="number"
            value={formattedValues[0]}
            onChange={({target: {value}}) => change([+value, formattedValues[1]])}
            min={formateedMin}
            max={formateedMax}
          />
          <TextInput
            type="number"
            value={formattedValues[1]}
            onChange={({target: {value}}) => change([formattedValues[0], +value])}
            min={formateedMin}
            max={formateedMax}
          />
        </NumericContainer>
      </Box>
    </Box>
  );
};

export default memo(Range);
