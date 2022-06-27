import React from 'react';
import {AppText} from 'components/app-text/AppText';
import {AppView} from 'components/layout/AppView';

interface Props {
  initials?: string;
}

export const Avatar: React.FC<Props> = ({initials}) => {
  return (
    <AppView className="h-8 w-8 b rounded-full flex justify-center items-center bg-primary">
      <AppText>{initials}</AppText>
    </AppView>
  );
};
