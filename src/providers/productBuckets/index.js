import React from 'react';
import identity from 'lodash/identity';
import useReducer from 'hooks/useReducer';
import useContextSelector from 'hooks/useContextSelector';
import defaultReducer from 'providers/utilities/reducer';
import getInitialState from 'providers/utilities/getInitialState';
import {useProductsDispatch} from 'providers/products';
import useExtraArgument from '../useExtraArgument';
import getResourceInitialState from './getResourceInitialState';
import Context, {DispatchContext} from './context';
import {getBucketId} from './helpers';

const reducer = (state, action) => {
  const updatedState = defaultReducer(state, action, {getResourceInitialState});
  if (updatedState) return updatedState;

  switch (action.type) {
    default:
      throw new Error(`unknown action '${action.type}'`);
  }
};

const initialState = getInitialState();

const ProductBucket = ({children}) => {
  const extraArgument = useExtraArgument();
  const productsDispatch = useProductsDispatch();

  const [state, dispatch] = useReducer(reducer, initialState, {...extraArgument, productsDispatch});

  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const useBucketsSelector = select => useContextSelector(Context, select);

export const useBucketSelector = (id, select = identity) =>
  useBucketsSelector(({byId}) => select(byId[id] || getResourceInitialState(id)));

export const useBucketParamsSelector = (params, select) => useBucketSelector(getBucketId(params), select);

export const useBucketsDispatch = () => useContextSelector(DispatchContext);

export default ProductBucket;
