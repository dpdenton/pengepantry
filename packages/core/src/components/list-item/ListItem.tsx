import React from 'react';
import {Animated} from 'react-native';
import styled from '@emotion/native';
import {Button} from 'components/button/Button';
import {AppView} from 'components/layout/AppView';
import {CenteredFlexRow} from 'components/layout/FlexRow';
import {AppText, FontWeight} from 'components/app-text/AppText';
import {Icon} from 'icons/Icon';

export interface Item {
  id: string;
  url: string;
}
export interface ListItemProps {
  item: Item;
  onPress: (item: Item) => void;
  imageStyle?: Animated.Animated;
}
export const ListItem: React.FC<ListItemProps> = ({
  item,
  onPress,
  imageStyle,
}) => {
  return (
    <ListItemView>
      <ListItemImage source={{uri: item.url}} style={imageStyle} />
      <ListItemDescriptionView>
        <CenteredFlexRow style={{justifyContent: 'space-between'}}>
          <Icon name="burgerMenu" />
          <AppView>
            <AppText weight={FontWeight.Bold}>Crazy house party</AppText>
            <AppText>12 July 2021 - 09:00 pm</AppText>
          </AppView>
          <Button label={'ADD'} onPress={() => onPress(item)} />
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
