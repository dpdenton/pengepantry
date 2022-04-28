import React from 'react';
import styled from '@emotion/native';
import {AppView} from 'components/layout/AppView';
import {Image} from 'react-native';
import {AppText} from 'components/app-text/AppText';
import {ColMedium, RowSmall} from 'components/layout/Spacer';
import {CenteredRow} from 'components/layout/Row';
import {Icon} from 'icons/Icon';
import {appTheme} from 'theme';

interface Props {
  uri: string;
  name: string;
}

export const RecipePopular: React.FC<Props> = ({uri, name}) => {
  return (
    <CardView>
      <ImageView source={{uri}} />
      <ColMedium />
      <AppText inverse>{name}</AppText>
      <ColMedium />
      <CenteredRow>
        <Icon name="clock" variant="primary" inverse />
        <RowSmall />
        <AppText inverse>30 mins</AppText>
      </CenteredRow>
    </CardView>
  );
};

const ImageView = styled(Image)`
  width: 170px;
  height: 170px;
`;

const CardView = styled(AppView)`
  width: ${(170 + 2 * appTheme.spacing.l).toString()}px;
  background: ${appTheme.action.primary.color};
  border-radius: 10px;
  padding: ${appTheme.spacing.l.toString()}px;
`;
