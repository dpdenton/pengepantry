import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {MenuRoute} from 'navigation/home/types';
import {
  RecipeListItem,
  RecipeListItemProps,
} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {Item} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {useHomeNavigation} from 'navigation/home/HomeStack';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';
import {orderSlice} from '@pengepantry/core/lib/store/slices/order/order-slice';

export const ListItemRedux: React.FC<
  Omit<RecipeListItemProps, 'onAdd' | 'onPress'>
> = props => {
  const {navigate} = useHomeNavigation();
  const dispatch = useDispatch();
  const selectedRecipeIds = useRecipeSelections();
  const animated = useRef(new Animated.Value(1)).current;

  const onAdd = (item: Item) => {
    const isSelected = selectedRecipeIds.includes(item.id);
    Animated.timing(animated, {
      toValue: isSelected ? 1 : 0,
      useNativeDriver: true,
    }).start();
    dispatch(orderSlice.actions.toggleRecipeSelection(item.id));
  };

  const style: Animated.Animated = {
    opacity: animated,
    transform: [
      {
        scale: animated,
      },
    ],
  };

  return (
    <RecipeListItem
      item={props.item}
      onAdd={onAdd}
      imageStyle={style}
      onPress={() => navigate(MenuRoute.RecipeDetail)}
    />
  );
};
