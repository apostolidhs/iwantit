import React from 'react';
import {Link as RouterLink} from '@reach/router';
import {useConfiguration} from 'providers/configuration';

const Link = ({to, children, className}) => {
  const {basepath} = useConfiguration();
  const routerTo = to[0] === '/' ? `${basepath}${to}` : to;

  return (
    <RouterLink className={className} to={routerTo}>
      {children}
    </RouterLink>
  );
};

export default Link;
