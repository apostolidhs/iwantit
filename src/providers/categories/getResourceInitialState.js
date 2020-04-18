import getResourceInitialState from 'providers/utilities/getResourceInitialState';

export default () => ({
  ...getResourceInitialState(),
  title: '',
  slug: '',
  position: -1,
  image_url: ''
});
