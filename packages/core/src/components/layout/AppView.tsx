import React from 'react';
import {View, ViewProps} from 'react-native';
import {AppViewProps} from './AppView.types';
import {tw} from 'theme/tailwind';

type Props = Omit<ViewProps, 'style'> & AppViewProps;

export const AppView: React.FC<Props> = ({className, children}) => {
  return (
    <View style={className ? tw`${className}` : undefined}>{children}</View>
  );
};
