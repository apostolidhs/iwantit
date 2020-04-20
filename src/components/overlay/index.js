import React from 'react';
import {useIntl} from 'providers/localization';
import {Box, Layer, Button} from 'grommet';
import {Close} from 'grommet-icons';

const Overlay = ({children, onClose, ...rest}) => {
  const intl = useIntl();

  return (
    <Layer full modal animation="fadeIn">
      <Box fill background="light-1">
        <Button alignSelf="end" title={intl('app.close')} icon={<Close />} onClick={onClose} />
        <Box margin={{top: 'xlarge'}} flex="grow" pad="large" {...rest}>
          {children}
        </Box>
      </Box>
    </Layer>
  );
};

export default Overlay;
