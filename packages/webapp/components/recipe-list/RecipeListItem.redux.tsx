import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  RecipeListItem,
  RecipeListItemProps,
} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {Item} from '@pengepantry/core/lib/components/recipe-list-item/RecipeListItem';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';
import {orderSlice} from '@pengepantry/core/lib/store/slices/order/order-slice';

export const ListItemRedux: React.FC<
  Omit<RecipeListItemProps, 'onAdd' | 'onPress'>
> = ({item}) => {
  const dispatch = useDispatch();
  const selectedRecipeIds = useRecipeSelections();

  const onAdd = useCallback(
    ({id}: Item) => dispatch(orderSlice.actions.toggleRecipeSelection(id)),
    [],
  );

  const isSelected = selectedRecipeIds.includes(item.id);

  return <RecipeListItem item={item} onAdd={onAdd} isSelected={isSelected} />;
};
