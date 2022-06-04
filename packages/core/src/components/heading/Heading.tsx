import React from 'react';
import {AppText} from 'components/app-text/AppText';
import {AppView} from 'components/layout/AppView';

interface Props {
  title: string;
  subTitle?: string;
}
export const Heading: React.FC<Props> = ({title, subTitle}) => {
  return (
    <AppView>
      <AppText variant="h1">{title}</AppText>
      {subTitle && <AppText variant="p2">{subTitle}</AppText>}
    </AppView>
  );
};
