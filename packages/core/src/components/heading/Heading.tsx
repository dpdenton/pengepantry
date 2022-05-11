import React from 'react';
import {AppText} from 'components/app-text/AppText';

interface Props {
  title: string;
  subTitle?: string;
}
export const Heading: React.FC<Props> = ({title, subTitle}) => {
  return (
    <>
      <AppText variant="h1">{title}</AppText>
      {subTitle && <AppText variant="p2">{subTitle}</AppText>}
    </>
  );
};
