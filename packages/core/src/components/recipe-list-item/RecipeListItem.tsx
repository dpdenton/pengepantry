import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {Button} from 'components/button/Button';
import {AppView} from 'components/layout/AppView';
import {CenteredRow} from 'components/layout/Row';
import {AppText} from 'components/app-text/AppText';
import {Icon} from 'icons/Icon';

export interface Item {
  id: string;
  url: string;
}
export interface RecipeListItemProps {
  item: Item;
  onAdd: (item: Item) => void;
  onPress: () => void;
  imageStyle?: Animated.Animated;
}
export const RecipeListItem: React.FC<RecipeListItemProps> = ({
  item,
  onAdd,
  onPress,
  imageStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItemView>
        <ListItemImage source={{uri: item.url}} style={imageStyle} />
        <ListItemDescriptionView>
          <CenteredRow style={{justifyContent: 'space-between'}}>
            <Icon name="burgerMenu" />
            <AppView>
              <AppText variant="p2" weight="bold">
                Crazy house party
              </AppText>
              <AppText variant="p2">12 July 2021 - 09:00 pm</AppText>
            </AppView>
            <Button label={'ADD'} onPress={() => onAdd(item)} />
          </CenteredRow>
        </ListItemDescriptionView>
      </ListItemView>
    </TouchableOpacity>
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
