import React from 'react';
import styled from 'styled-components';
import {Box, Text} from 'grommet';

const Container = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Notification = ({type, message}) => (
  <Container animation="fadeIn">
    <Box
      background={type === 'info' ? 'neutral-3' : 'status-warning'}
      pad={{left: 'medium', vertical: 'small', right: 'medium'}}>
      <Text color="white" size="large">
        {message}
      </Text>
    </Box>
  </Container>
);

export default Notification;
