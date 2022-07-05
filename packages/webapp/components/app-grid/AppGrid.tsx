import {PropsWithChildren} from 'react';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';

interface Props extends PropsWithChildren {
  cols?: number;
  gap?: number;
}

export const AppGrid: React.FC<Props> = ({cols = 1, gap = 4, children}) => {
  return (
    <AppView
      className={`grid grid-cols-${cols.toString()} gap-${gap.toString()}`}
    >
      {children}
    </AppView>
  );
};
