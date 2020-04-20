import React from 'react';
import {FormattedMessage} from 'react-intl';
import NotFound from 'organisms/notFound';

const PageNotFound = props => (
  <NotFound {...props}>
    <FormattedMessage id="pages.products.notFound" />
  </NotFound>
);

export default PageNotFound;
