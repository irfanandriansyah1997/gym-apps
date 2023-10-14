export const castingError = (e: unknown): Error => {
  if (e instanceof Error) return e;

  return new Error(`Unknown error: ${e}`);
};
