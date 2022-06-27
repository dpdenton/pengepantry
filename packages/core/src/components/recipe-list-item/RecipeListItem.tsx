import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
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
      <AppView className="shadow bg-white rounded-2">
        <Animated.Image
          source={{uri: item.url, height: 180}}
          style={[imageStyle, {width: '100%'}]}
        />
        <AppView className="p-2">
          <CenteredRow className="justify-between">
            <Icon name="burgerMenu" />
            <AppView>
              <AppText variant="p2">Crazy house party</AppText>
              <AppText variant="p2">12 July 2021 - 09:00 pm</AppText>
            </AppView>
            <Button onPress={() => onAdd(item)}>ADD</Button>
          </CenteredRow>
        </AppView>
      </AppView>
    </TouchableOpacity>
  );
};
