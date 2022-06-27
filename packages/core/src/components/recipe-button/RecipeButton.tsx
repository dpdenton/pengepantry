import React from 'react';
import {Card} from 'components/card/Card';
import {Button} from 'components/button/Button';
import {Image} from 'react-native';
import {CenteredRow} from 'components/layout/Row';
import {ColSpacer} from 'components/layout/Spacer';

interface Props {
  onPress: () => void;
}

export const RecipeButton: React.FC<Props> = ({onPress}) => {
  return (
    <Card>
      <CenteredRow className="justify-between">
        <Image
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
        <Image
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
        <Image
          source={{
            uri: 'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
      </CenteredRow>
      <ColSpacer />
      <Button intent="positive" onPress={onPress}>
        SELECT RECIPES
      </Button>
    </Card>
  );
};
