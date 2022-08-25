import {AppText} from 'components/app-text/AppText';
import React from 'react';
import {iconData} from './Icon.data';

export type IconName = keyof typeof iconData;

interface Props {
  name: IconName;
}

export const Icon: React.FC<Props> = ({name}) => {
  return <AppText>I</AppText>;
};
