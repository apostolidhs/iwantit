import React, {memo} from 'react';
import {Text} from 'grommet';

const getText = excerpt => {
  const div = document.createElement('div');
  div.innerHTML = excerpt;

  return div.textContent
    .split(',')
    .map(v => v.trim())
    .filter(Boolean)
    .splice(1)
    .join(', ');
};

const Excerpt = ({children}) => {
  const text = children && getText(children);
  return text ? <Text size="small">{text}</Text> : null;
};

export default memo(Excerpt);
