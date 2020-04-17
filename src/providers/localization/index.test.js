import React from 'react';
import {render} from '@testing-library/react';
import locales from 'providers/localization/el';
import LocalizationProvider, {useIntl} from './index';

it('renders', () => {
  const {getByText} = render(<LocalizationProvider>myContent</LocalizationProvider>);
  expect(getByText('myContent')).toBeInTheDocument();
});

const Component = () => {
  const intl = useIntl();
  return <span data-testid="intlContent">{intl('error.general')}</span>;
};

it('renders a translation', () => {
  const {getByText, getByTestId} = render(
    <LocalizationProvider>
      <Component />
    </LocalizationProvider>
  );
  expect(getByTestId('intlContent')).toHaveTextContent(locales['error.general']);
});
