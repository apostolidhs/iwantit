import React from 'react';
import List from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

const Virtualized = ({rowHeight, total, rowRenderer}) => (
  <AutoSizer>
    {({width, height}) => (
      <List height={height} rowCount={total} rowHeight={rowHeight} rowRenderer={rowRenderer} width={width} />
    )}
  </AutoSizer>
);

export default Virtualized;
