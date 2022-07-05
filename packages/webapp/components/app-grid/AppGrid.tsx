import classNames from 'classnames';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  cols?: number;
  gap?: number;
}

export const AppGrid: React.FC<Props> = ({cols, gap = 4, children}) => {
  return (
    <AppView
      className={classNames('grid', {
        [`gap-${gap}`]: gap,
        [`grid-cols-${cols}`]: cols,
      })}
    >
      {children}
    </AppView>
  );
};
