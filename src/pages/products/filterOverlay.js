import React, {useCallback, useState, useEffect} from 'react';
import isEqual from 'lodash/isEqual';
import {Box, Button} from 'grommet';
import {useIntl} from 'providers/localization';
import Range from 'components/range';
import Overlay from 'components/overlay';

const FilterOverlay = ({values: initialValues, min, onChange, onClose, max, label, id}) => {
  const intl = useIntl();
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const onSubmit = useCallback(() => {
    onChange(values);
    onClose();
  }, [values]);

  return (
    <Overlay justify="between" onClose={onClose}>
      <Range alignSelf="center" values={values} onChange={setValues} min={min} max={max} label={label} id={id} />
      <Box direction="row" gap="small">
        <Box flex="grow">
          <Button label={intl('filters.overlay.cancel')} fill onClick={onClose} />
        </Box>
        <Box flex="grow">
          <Button
            disabled={isEqual(values, initialValues)}
            onClick={onSubmit}
            label={intl('filters.overlay.submit')}
            fill
            primary
          />
        </Box>
      </Box>
    </Overlay>
  );
};

export default FilterOverlay;
