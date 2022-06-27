import React, {BaseSyntheticEvent} from 'react';
import {AppButtonProps} from './Button.types';
import classNames from 'classnames';
import {
  getContainerClassName,
  getTextClassName,
} from 'components/button/Button.utils';

type Props = AppButtonProps & {
  onPress: (event: BaseSyntheticEvent) => void;
};

export const Button: React.FC<Props> = ({children, intent, onPress}) => {
  const containerClassName = getContainerClassName(intent);
  const textClassName = getTextClassName(intent);
  return (
    <button
      className={classNames(containerClassName, textClassName)}
      onClick={onPress}
    >
      {children}
    </button>
  );
};
