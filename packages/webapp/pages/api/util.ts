import dynamic from 'next/dynamic';
export type Fn = (...args: any) => any;

type AsyncReturnType<T extends Fn> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

export const importNoSSR = <T extends Fn>(loader: T): AsyncReturnType<T> => {
  return dynamic(loader(), {
    ssr: false,
  }) as unknown as AsyncReturnType<T>;
};
