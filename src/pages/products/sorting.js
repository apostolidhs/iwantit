import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Box, Button} from 'grommet';

const DescButton = styled(Button)`
  border-radius: ${({theme}) => `${theme.button.border.radius} 0 0 ${theme.button.border.radius}`};
`;
const AscButton = styled(Button)`
  border-radius: ${({theme}) => `0 ${theme.button.border.radius} ${theme.button.border.radius} 0`};
`;

const Sorting = ({direction, onSort, ...rest}) => (
  <Box direction="row" align="baseline" {...rest}>
    <DescButton primary={!direction} label="Φθηνότερα" title="Φθινότερα πρώτα" onClick={() => onSort('price', false)} />
    <AscButton primary={direction} label="Ακριβότερα" title="Ακριβότερα πρώτα" onClick={() => onSort('price', true)} />
  </Box>
);

export default Sorting;
