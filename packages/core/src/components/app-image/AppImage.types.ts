import {MutableRefObject} from 'react';

export type AppAnimation = {
  scale: (value: number) => void;
};

export type AppImageProps = {
  ref?: MutableRefObject<AppAnimation | null> | null;
  url: string;
};
