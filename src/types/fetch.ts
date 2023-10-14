export interface GenericAsyncResponse<T> {
  error?: Error;
  result?: T;
}
