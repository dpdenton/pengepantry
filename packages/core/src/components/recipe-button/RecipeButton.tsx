import React from 'react';
import {Card} from 'components/card/Card';
import {Button} from 'components/button/Button';
import styled from '@emotion/native';
import {Image} from 'react-native';
import {CenteredRow} from 'components/layout/Row';
import {appTheme} from 'theme';
import {ColMedium} from 'components/layout/Spacer';

interface Props {
  onPress: () => void;
}

export const RecipeButton: React.FC<Props> = ({onPress}) => {
  return (
    <Card padding={appTheme.spacing.l}>
      <ImageRow>
        <ImageView
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
        />
        <ImageView
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
        />
        <ImageView
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
        />
      </ImageRow>
      <ColMedium />
      <Button label="SELECT RECIPES" onPress={onPress} />
    </Card>
  );
};

const ImageRow = styled(CenteredRow)`
  justify-content: space-between;
`;

const ImageView = styled(Image)`
  height: 70px;
  width: 70px;
  border-radius: 10px;
`;
