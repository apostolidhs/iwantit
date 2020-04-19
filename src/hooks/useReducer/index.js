import {useReducer, useCallback, useRef} from 'react';

export default (reducer, initialState, extraArgument) => {
  const [state, reactDispatch] = useReducer(reducer, initialState);
  const stateRef = useRef();
  stateRef.current = state;

  const dispatch = useCallback(
    param =>
      typeof param === 'function' ? param(stateRef.current, reactDispatch, extraArgument) : reactDispatch(param),
    []
  );

  return [state, dispatch];
};
