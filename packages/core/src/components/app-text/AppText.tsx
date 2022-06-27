import React from 'react';
import {Text} from 'react-native';
import {mapFontSizeToClassName} from 'components/app-text/AppText.utils';
import {AppTextProps} from 'components/app-text/AppText.types';
import {PropsWithClassName} from 'utils/types';
import {tw} from 'theme/tailwind';

export const AppText: React.FC<AppTextProps & PropsWithClassName> = ({
  variant,
  size,
  className,
  children,
  ...textProps
}) => {
  const fontSizeClassName = mapFontSizeToClassName(size);
  return (
    <Text style={tw.style(className, fontSizeClassName)} {...textProps}>
      {children}
    </Text>
  );
};
