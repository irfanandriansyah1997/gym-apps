import { useMemo, useState } from "react";

type AsyncStateType<State = undefined> = {
  error?: Error;
  loading: boolean;
} & (State extends undefined ? { state?: State } : { state: State });

type UseAsyncStateArgs<State = undefined> = {
  initialLoading?: boolean;
} & (State extends undefined
  ? { initialState?: State }
  : { initialState: State });

interface AsyncStateUpdateDispatcher<State> {
  reset: () => void;
  setError: (error: Error) => void;
  setLoading: (isLoading: boolean) => void;
  setSuccess: (payload: State) => void;
}

type AsyncStateResponseType<State> = [
  AsyncStateType<State>,
  AsyncStateUpdateDispatcher<State>
];

/**
 * Use Async State
 *
 * @param {State} initialState - initial state data
 * @description These custom hooks accommodate basic data when it is collected from an async process; by default,
 * this hooks return loading, status, and error data.
 * @returns {[AsyncStateType<State>, (args: AsyncStatePayloadType<State>) => void]}
 */
export function useAsyncState<State>(
  args: UseAsyncStateArgs<State>
): AsyncStateResponseType<State> {
  const { initialLoading = false, initialState = undefined } = args;
  const [state, setState] = useState<AsyncStateType<State>>({
    error: undefined,
    loading: initialLoading,
    state: initialState,
  } as unknown as AsyncStateType<State>);

  const handleOnSetState: AsyncStateUpdateDispatcher<State> = useMemo(() => {
    const setSuccess = (payload: State) => {
      setState((previousState) => ({
        ...previousState,
        error: undefined,
        loading: false,
        state: payload,
      }));
    };

    const setError = (error: Error) => {
      setState((previousState) => ({
        ...previousState,
        error: error,
        loading: false,
      }));
    };

    const setLoading = (isLoading: boolean) => {
      setState((previousState) => ({ ...previousState, loading: isLoading }));
    };

    const reset = () => {
      setState({
        error: undefined,
        loading: false,
        state: initialState,
      } as unknown as AsyncStateType<State>);
    };

    return {
      reset,
      setError,
      setLoading,
      setSuccess,
    };
  }, [initialState]);

  return [state, handleOnSetState];
}
