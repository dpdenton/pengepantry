import React from 'react';
import classNames from 'classnames';
import {AppView} from 'components/layout/AppView';

interface Props {
  size: number;
  color: string;
}

export const Dot: React.FC<Props> = ({size}) => {
  return (
    <AppView
      className={classNames(
        `h-px=${size}`,
        `w-px=${size} rounded-full bg-primary`,
      )}
    />
  );
};
