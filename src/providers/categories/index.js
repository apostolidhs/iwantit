import React, {useReducer} from 'react';
import useContextSelector from 'hooks/useContextSelector';
import defaultReducer from 'providers/utilities/reducer';
import getInitialState from 'providers/utilities/getInitialState';
import getResourceInitialState from './getResourceInitialState';
import Context, {DispatchContext} from './context';
import useFetch from './useFetch';

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
  const [state, dispatch] = useReducer(reducer, initialState);

  useFetch(dispatch);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const useCategoriesSelector = select => useContextSelector(Context, select);
export const useCategorySelector = (id, select) => useCategoriesSelector(Context, ({byId}) => select(byId[id]));

export default Configuration;
