import getResourceInitialState from 'providers/utilities/getResourceInitialState';

export default id => ({
  ...getResourceInitialState(id),
  ids: []
});
