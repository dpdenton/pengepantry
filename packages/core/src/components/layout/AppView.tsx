import React from 'react';
import {View, ViewProps} from 'react-native';
import tw from 'twrnc';
import {AppViewProps} from './AppView.types';

type Props = Omit<ViewProps, 'style'> & AppViewProps;

export const AppView: React.FC<Props> = ({className, children}) => {
  return (
    <View style={className ? tw`${className}` : undefined}>{children}</View>
  );
};
