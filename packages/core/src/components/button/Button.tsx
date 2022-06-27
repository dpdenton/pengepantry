import React from 'react';
import {TouchableOpacity} from 'react-native';
import classNames from 'classnames';
import {tw} from 'theme/tailwind';
import {AppText} from 'components/app-text/AppText';
import {AppButtonProps} from './Button.types';
import {getContainerClassName, getTextClassName} from './Button.utils';

export const Button: React.FC<AppButtonProps> = ({
  children,
  intent,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={tw.style(getContainerClassName(intent))}
    >
      <AppText className={classNames('text-center', getTextClassName(intent))}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
};
