import * as actionTypes from './actionTypes';
import getDefaultResourceInitialState from './getResourceInitialState';

const doneFetch = (state, payload) => {
  const ids = payload.map(({id}) => id.toString());
  const byId = payload.reduce((h, resource) => ({...h, [resource.id]: resource}), state.byId);

  return {...state, loaded: true, loading: false, ids: [...new Set([...state.ids, ...ids])], byId};
};

export default (state, action, {getResourceInitialState = getDefaultResourceInitialState} = {}) => {
  const updateResource = (state, id, dispatch) => ({
    ...state,
    ids: [...new Set([...state.ids, id])],
    byId: {...state.byId, [id]: dispatch({...getResourceInitialState(id), ...state.byId[id]})}
  });

  switch (action.type) {
    case actionTypes.startFetchResource:
      return updateResource(state, action.id, resource => ({...resource, loading: true}));

    case actionTypes.doneFetchResource:
      return updateResource(state, action.id, resource => ({
        ...resource,
        loaded: true,
        loading: false,
        ...action.payload
      }));

    case actionTypes.failFetchResource:
      return updateResource(state, action.id, resource => ({...resource, loading: false}));

    case actionTypes.startFetch:
      return {...state, loading: true};

    case actionTypes.doneFetch:
      return doneFetch(state, action.payload);

    case actionTypes.failFetch:
      return {...state, loading: false};

    default:
      return null;
  }
};
