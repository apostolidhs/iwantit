import React, {memo} from 'react';
import {Text} from 'grommet';

const getText = (excerpt, short) => {
  const div = document.createElement('div');
  div.innerHTML = excerpt;

  const items = div.textContent
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);

  return (short ? items.splice(1, 6) : items.splice(1)).join(', ');
};

const Excerpt = ({children, short}) => {
  const text = children && getText(children, short);
  return text ? <Text size="small">{text}</Text> : null;
};

export default memo(Excerpt);
