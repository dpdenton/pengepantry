import React from 'react';
import {ViewProps} from 'react-native';
import {AppView} from 'components/layout/AppView';

export const Screen: React.FC<ViewProps> = ({children}) => {
  return (
    <AppView className="px-3 py-2 min-h-full bg-primary">{children}</AppView>
  );
};
