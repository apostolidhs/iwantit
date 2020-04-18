import '@testing-library/jest-dom/extend-expect';
import IntlPolyfill from 'intl';

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
