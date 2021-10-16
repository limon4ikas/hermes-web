import { useReducer } from 'react';

enum ObservedStateActionType {
  reset = 'reset',
  setValue = 'setValue',
}

interface ObservedStateAction {
  type: ObservedStateActionType;
  payload?: unknown;
}

interface ObservedState {}

const defaultState = {
  value: null,
  isLoading: false,
  isError: false,
  error: null,
};

const getDefaultState = () => {
  return {};
};

const stateReducer = (
  state: ObservedState,
  action: ObservedStateAction
): ObservedState => {
  switch (action.type) {
    case ObservedStateActionType.reset:
      return defaultState;
    default:
      return state;
  }
};

export const useObservedState = () => {
  const [state, dispatch] = useReducer(
    stateReducer,
    defaultState,
    getDefaultState
  );

  const reset = () => {
    dispatch({ type: ObservedStateActionType.reset });
  };

  const setValue = (value: any) => {
    dispatch({ type: ObservedStateActionType.setValue, payload: value });
  };

  return { reset, setValue };
};
