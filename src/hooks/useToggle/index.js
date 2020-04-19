import {useState, useMemo} from 'react';

export default () => {
  const [toggle, setToggle] = useState();
  return useMemo(() => [toggle, () => setToggle(true), () => setToggle(false)], [toggle]);
};
