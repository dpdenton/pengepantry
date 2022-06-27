import React from 'react';
import classNames from 'classnames';
import {AppView} from 'components/layout/AppView';

type Props = {
  size?: 's' | 'm' | 'l';
};

// h-px	height: 1px;
// h-0.5 height: 0.125rem;     /* 2px */
// h-1	height: 0.25rem;      /* 4px */
// h-2	height: 0.5rem;       /* 8px */
// h-3	height: 0.75rem;      /* 12px */
// h-4	height: 1rem;         /* 16px */
// h-6	height: 1.5rem;       /* 24px */

export const RowSpacer: React.FC<Props> = ({size = 'm'}) => {
  return (
    <AppView
      className={classNames({
        'w-3': size === 's',
        'w-4': size === 'm',
        'w-5': size === 'l',
      })}
    />
  );
};

export const ColSpacer: React.FC<Props> = ({size = 'm'}) => {
  return (
    <AppView
      className={classNames({
        'h-3': size === 's',
        'h-4': size === 'm',
        'h-5': size === 'l',
      })}
    />
  );
};
