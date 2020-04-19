import React, {memo} from 'react';
import {Box, Button, Text} from 'grommet';
import {FormPrevious, FormNext, Down, Up} from 'grommet-icons';
import {useScreenSize} from 'providers/theme';

const Separator = () => (
  <Text alignSelf="center" margin={{horizontal: 'xsmall'}}>
    ...
  </Text>
);

const Pagination = ({total, page, onPage, up}) => {
  const {isSmall} = useScreenSize();

  const totalPages = Math.floor(total / 15);
  const isFirst = page === 1;
  const isLast = page === totalPages;
  const prev = Math.max(1, page - 1);
  const next = Math.min(totalPages, page + 1);

  if (isSmall && up)
    return isFirst ? null : <Button icon={<Up />} plain={false} primary onClick={() => onPage(prev)} />;

  if (isSmall) return isLast ? null : <Button icon={<Down />} plain={false} primary onClick={() => onPage(next)} />;

  return (
    <Box direction="row" gap="small">
      <Button plain icon={<FormPrevious />} disabled={isFirst} onClick={() => onPage(prev)} />
      <Button plain disabled={isFirst} label="1" onClick={() => onPage(1)} />

      {page > 3 && <Separator />}

      {page > 2 && <Button plain label={prev} onClick={() => onPage(prev)} />}
      {!isFirst && !isLast && <Button plain label={page} disabled onClick={() => onPage(page)} />}
      {page < totalPages - 2 && <Button plain label={next} onClick={() => onPage(next)} />}

      {page < totalPages - 3 && <Separator />}

      <Button plain disabled={isLast} label={totalPages} onClick={() => onPage(totalPages)} />
      <Button plain icon={<FormNext />} disabled={isLast} onClick={() => onPage(next)} />
    </Box>
  );
};

export default memo(Pagination);
