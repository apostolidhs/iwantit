import React from 'react';
import {useMemo} from 'react';
import {Box} from 'grommet';
import {useScreenSize, useTheme} from 'providers/theme';
import ProductTeaser from 'organisms/productTeaser';
import Skeleton from 'organisms/productTeaser/skeleton';
import useFetchBucket from './useFetchBucket';

export default bucketParams => {
  const theme = useTheme();
  const {isSmall, isMedium} = useScreenSize();
  const {ids, loading, bucketLoaded} = useFetchBucket(bucketParams);

  return useMemo(() => {
    const hasResults = ids.length > 0;

    const columns = isSmall ? 1 : isMedium ? 3 : 4;

    const columnsArray = [...Array(columns)];

    const total = Math.floor((loading ? 15 : ids.length) / columns);

    const rowHeight = (isSmall ? 280 : 430) + Number.parseInt(theme.global.edgeSize[isSmall ? 'medium' : 'small']);

    const totalHeight = total * rowHeight;

    const rowRenderer = ({index: rowIndex, key, style}) => (
      <Box key={key} direction="row" gap="small" style={style}>
        {columnsArray.map((v, index) => {
          const position = rowIndex * columns + index;
          const id = ids[position];
          const props = {flex: 'grow', basis: '0', margin: {bottom: isSmall ? 'medium' : 'small'}};

          return loading ? <Skeleton key={position} {...props} /> : <ProductTeaser key={id} id={id} {...props} />;
        })}
      </Box>
    );

    return {bucketLoaded, total, rowHeight, totalHeight, hasResults, rowRenderer};
  }, [isSmall, isMedium, ids, loading]);
};
