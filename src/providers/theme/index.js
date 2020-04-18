import React, {useContext} from 'react';
import {Grommet, ResponsiveContext} from 'grommet';
import theme from './theme';
import GlobalStyle from './globalStyle';

const Theme = ({children}) => (
  <Grommet theme={theme} style={{height: '100%'}}>
    <GlobalStyle />
    {children}
  </Grommet>
);

export const useScreenSize = () => {
  const size = useContext(ResponsiveContext);

  return useMemo(
    () => ({
      size,
      isSmall: size === 'small',
      isMedium: size === 'medium',
      isLarge: size === 'large'
    }),
    [size]
  );
};

export default Theme;
