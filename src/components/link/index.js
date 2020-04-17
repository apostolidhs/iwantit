import React from 'react';
import {Link as RouterLink} from '@reach/router';

const Link = ({to, children, ...props}) => {
  const routerTo = to[0] === '/' ? '/iwantit' + to : to;

  return (
    <RouterLink {...props} to={routerTo}>
      {children}
    </RouterLink>
  );
};

export default Link;
