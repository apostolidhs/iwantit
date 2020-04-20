import React from 'react';
import NotFound from 'organisms/notFound';
import {FormattedMessage} from 'react-intl';

const PageNotFound = props => (
  <NotFound {...props}>
    <FormattedMessage id="pages.notFound" />
  </NotFound>
);

export default PageNotFound;
