import React from 'react';
import {useScreenSize} from 'providers/theme';
import styled from 'styled-components';
import {Box, Button} from 'grommet';

const DescButton = styled(Button)`
  padding: 4px 8px;
  border-radius: ${({theme}) => `${theme.button.border.radius} 0 0 ${theme.button.border.radius}`};
`;
const AscButton = styled(Button)`
  padding: 4px 8px;
  border-radius: ${({theme}) => `0 ${theme.button.border.radius} ${theme.button.border.radius} 0`};
`;

const Sorting = ({direction, onSort, ...rest}) => {
  const {isSmall} = useScreenSize();
  const size = isSmall ? 'small' : 'medium';

  return (
    <Box direction="row" align="baseline" {...rest}>
      <DescButton
        primary={!direction}
        size={size}
        label="Φθηνότερα"
        title="Φθινότερα πρώτα"
        onClick={() => onSort('price', false)}
      />
      <AscButton
        primary={direction}
        size={size}
        label="Ακριβότερα"
        title="Ακριβότερα πρώτα"
        onClick={() => onSort('price', true)}
      />
    </Box>
  );
};

export default Sorting;
