import React from 'react';
import {useDispatch} from 'react-redux';
import {MenuRoute} from 'navigation/home/types';
import {useHomeNavigation} from 'navigation/home/HomeStack';
import {
  RecipeListItem,
  RecipeListItemProps,
} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {Item} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';
import {orderSlice} from '@pengepantry/core/lib/store/slices/order/order-slice';

export const ListItemRedux: React.FC<
  Omit<RecipeListItemProps, 'onAdd' | 'onPress'>
> = props => {
  const {navigate} = useHomeNavigation();
  const dispatch = useDispatch();
  const selectedRecipeIds = useRecipeSelections();
  const onAdd = (item: Item) =>
    dispatch(orderSlice.actions.toggleRecipeSelection(item.id));

  return (
    <RecipeListItem
      item={props.item}
      onAdd={onAdd}
      isSelected={selectedRecipeIds.includes(props.item.id)}
      onPress={() => navigate(MenuRoute.RecipeDetail)}
    />
  );
};
