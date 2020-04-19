import React, {memo} from 'react';
import {Box, Stack, RangeSelector, TextInput, Text} from 'grommet';
import styled from 'styled-components';

const NumericContainer = styled(Box)`
  > * {
    width: 100px;

    input {
      font-weight: initial;
      padding: 6px;
    }
  }
`;

const Range = ({id, values, min, max, onChange, label, ...rest}) => (
  <Box gap="medium" width="medium" direction="row" {...rest}>
    <Text as="label" htmlFor={id}>
      {label}
    </Text>
    <Box gap="small" flex="grow">
      <Stack>
        <Box border={{color: 'light-3'}} />
        <RangeSelector id={id} values={values} onChange={onChange} min={min} max={max} round="xsmall" size="xxsmall" />
      </Stack>
      <NumericContainer justify="between" direction="row">
        <TextInput
          type="number"
          value={values[0]}
          onChange={({target: {value}}) => onChange([+value, values[1]])}
          min={min}
          max={max}
        />
        <TextInput
          type="number"
          value={values[1]}
          onChange={({target: {value}}) => onChange([values[0], +value])}
          min={min}
          max={max}
        />
      </NumericContainer>
    </Box>
  </Box>
);

export default memo(Range);
