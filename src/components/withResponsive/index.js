import React from 'react';
import styled from 'styled-components';
import {useScreenSize} from 'providers/theme';

export default Component => {
  const WithResponsive = styled(Component)`
    width: 100%;
    max-width: ${({theme, isSmall, maxSize = 'xxlarge'}) => (isSmall ? '100%' : theme.global.size[maxSize])};
  `;

  const Responsive = props => {
    const {isSmall} = useScreenSize();
    return <WithResponsive isSmall={isSmall} {...props} />;
  };

  return Responsive;
};
