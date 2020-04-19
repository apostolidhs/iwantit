import getResourceInitialState from 'providers/utilities/getResourceInitialState';

export default id => ({
  ...getResourceInitialState(id),
  title: '',
  slug: '',
  position: 0,
  imageUrl: '',
  productsCount: 0,
  priceMin: 0,
  priceMax: 0
});
