import React, {PropsWithChildren} from 'react';
import {AppView} from 'components/layout/AppView';

export const Card: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return <AppView className="bg-white rounded shadow p-3">{children}</AppView>;
};
