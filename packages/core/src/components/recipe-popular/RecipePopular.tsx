import React from 'react';
import {Image} from 'react-native';
import {Icon} from 'icons/Icon';
import {CenteredRow} from 'components/layout/Row';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {ColSpacer, RowSpacer} from 'components/layout/Spacer';

interface Props {
  uri: string;
  name: string;
}

export const RecipePopular: React.FC<Props> = ({uri, name}) => {
  return (
    <AppView className="bg-primary-light rounded w-[190px] p-[10px]">
      <Image
        source={{uri}}
        style={{width: 170, height: 170, borderRadius: 10}}
      />
      <ColSpacer />
      <AppText>{name}</AppText>
      <ColSpacer />
      <CenteredRow>
        <Icon name="clock" inverse />
        <RowSpacer />
        <AppText>30 mins</AppText>
      </CenteredRow>
    </AppView>
  );
};
