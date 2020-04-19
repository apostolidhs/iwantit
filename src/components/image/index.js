import React from 'react';
import {Image as GImage} from 'grommet';
import placeholderImg from './placeholder.jpg';

const Image = props => <GImage fallback={placeholderImg} {...props} />;

export default Image;
