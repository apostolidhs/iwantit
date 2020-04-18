import React from 'react';
import identity from 'lodash/identity';
import useReducer from 'hooks/useReducer';
import useContextSelector from 'hooks/useContextSelector';
import defaultReducer from 'providers/utilities/reducer';
import getInitialState from 'providers/utilities/getInitialState';
import useExtraArgument from '../useExtraArgument';
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

const Products = ({children}) => {
  const extraArgument = useExtraArgument();
  const [state, dispatch] = useReducer(reducer, initialState, {extraArgument});

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const useProductsSelector = select => useContextSelector(Context, select);

export const useProductSelector = (id, select = identity) => useProductsSelector(Context, ({byId}) => select(byId[id]));

export const useProductsDispatch = () => useContextSelector(DispatchContext);

export default Products;
