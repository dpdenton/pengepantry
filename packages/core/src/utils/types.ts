export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;

export type NamedEntity = {
  id: string;
  name: string;
};

export type PropsWithClassName = {
  className?: string;
};
