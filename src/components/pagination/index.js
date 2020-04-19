import React, {memo} from 'react';
import styled from 'styled-components';
import {Box, Button, Text} from 'grommet';
import {FormPrevious, FormNext} from 'grommet-icons';

const Separator = () => (
  <Text alignSelf="center" margin={{horizontal: 'xsmall'}}>
    ...
  </Text>
);

const Pagination = ({total, current, onPage}) => {
  const isFirst = current === 1;
  const isLast = current === total;
  const prev = Math.max(1, current - 1);
  const next = Math.min(total, current + 1);

  return (
    <Box direction="row" gap="small">
      <Button plain icon={<FormPrevious />} disabled={isFirst} onClick={() => onPage(prev)} />
      <Button plain disabled={isFirst} label="1" onClick={() => onPage(1)} />

      {current > 3 && <Separator />}

      {current > 2 && <Button plain label={prev} onClick={() => onPage(prev)} />}
      {!isFirst && !isLast && <Button plain label={current} disabled onClick={() => onPage(current)} />}
      {current < total - 2 && <Button plain label={next} onClick={() => onPage(next)} />}

      {current < total - 3 && <Separator />}

      <Button plain disabled={isLast} label={total} onClick={() => onPage(total)} />
      <Button plain icon={<FormNext />} disabled={isLast} onClick={() => onPage(next)} />
    </Box>
  );
};

export default memo(Pagination);
