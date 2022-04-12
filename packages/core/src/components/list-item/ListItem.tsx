import React, {useRef} from 'react';
import {Image, Animated} from 'react-native';
import styled from '@emotion/native';
import {Button} from 'components/button/Button';
import {AppView} from 'components/layout/AppView';
import {CenteredFlexRow} from 'components/layout/FlexRow';
import {AppText, FontWeight} from 'components/app-text/AppText';

interface Item {
  url: string;
}
interface Props {
  item: Item;
  onPress: () => void;
}
export const ListItem: React.FC<Props> = ({item, onPress}) => {
  const imageRef = useRef<Image | null>(null);
  const animated = useRef(new Animated.Value(1)).current;

  return (
    <ListItemView>
      <ListItemImage
        ref={imageRef}
        source={{uri: item.url}}
        style={{
          opacity: animated,
          transform: [
            {
              scale: animated,
            },
          ],
        }}
      />
      <ListItemDescriptionView>
        <CenteredFlexRow style={{justifyContent: 'space-between'}}>
          <AppView>
            <AppText weight={FontWeight.Bold}>Crazy house party</AppText>
            <AppText>12 July 2021 - 09:00 pm</AppText>
          </AppView>
          <Button label={'ADD'} onPress={onPress} />
        </CenteredFlexRow>
      </ListItemDescriptionView>
    </ListItemView>
  );
};

const ListItemDescriptionView = styled(AppView)`
  padding: 14px;
`;

const ListItemView = styled(AppView)`
  background-color: white;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 48px;
  // box-shadow: 0px 2px 48px 0 rgba(0,0,0,0.06);
`;

const ListItemImage = styled(Animated.Image)`
  height: 180px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: -1;
`;
