import {useReducer, useCallback, useRef} from 'react';

export default (reducer, initialState, extraArgument) => {
  const [state, reactDispatch] = useReducer(reducer, initialState);
  const stateRef = useRef();
  stateRef.current = state;

  const dispatch = useCallback(param => {
    if (typeof param === 'function') return reactDispatch(param(stateRef.current, reactDispatch, extraArgument));
    return reactDispatch(param);
  }, []);

  return [state, dispatch];
};
