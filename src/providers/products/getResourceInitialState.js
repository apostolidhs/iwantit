import getResourceInitialState from 'providers/utilities/getResourceInitialState';

export default id => ({
  ...getResourceInitialState(id),
  categoryId: null,
  title: '',
  slugPath: '',
  imageUrl: '',
  price: 0,
  excerpt: '',
  description: ''
});
