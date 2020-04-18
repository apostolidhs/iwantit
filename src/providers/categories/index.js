import React, {useEffect} from 'react';
import identity from 'lodash/identity';
import useReducer from 'hooks/useReducer';
import useContextSelector from 'hooks/useContextSelector';
import defaultReducer from 'providers/utilities/reducer';
import getInitialState from 'providers/utilities/getInitialState';
import useExtraArgument from '../useExtraArgument';
import * as actions from './actions';
import getResourceInitialState from './getResourceInitialState';
import Context, {DispatchContext} from './context';

const reducer = (state, action) => {
  const updatedState = defaultReducer(state, action, {getResourceInitialState});
  if (updatedState) return updatedState;

  switch (action.type) {
    default:
      throw new Error(`unknown action '${action.type}'`);
  }
};

const initialState = getInitialState();

const Configuration = ({children}) => {
  const extraArgument = useExtraArgument();
  const [state, dispatch] = useReducer(reducer, initialState, extraArgument);

  useEffect(() => {
    actions.fetch()(state, dispatch, extraArgument);
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const useCategoriesSelector = select => useContextSelector(Context, select);
export const useCategorySelector = (id, select = identity) => useCategoriesSelector(({byId}) => select(byId[id]));

export default Configuration;
