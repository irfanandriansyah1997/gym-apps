type Primitive = bigint | boolean | number | string | symbol | null | undefined;

export type NullAble<T> = T | null;

export type Maybe<T> = T | undefined;

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);
