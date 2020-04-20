import React from 'react';
import {useIntl} from 'providers/localization';
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
  const intl = useIntl();
  const {isSmall} = useScreenSize();
  const size = isSmall ? 'small' : 'medium';

  return (
    <Box direction="row" align="baseline" {...rest}>
      <DescButton
        primary={!direction}
        size={size}
        label={intl('sorting.desc.label')}
        title={intl('sorting.desc.title')}
        onClick={() => onSort('price', false)}
      />
      <AscButton
        primary={direction}
        size={size}
        label={intl('sorting.asc.label')}
        title={intl('sorting.asc.title')}
        onClick={() => onSort('price', true)}
      />
    </Box>
  );
};

export default Sorting;
