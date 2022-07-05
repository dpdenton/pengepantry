import React from 'react';
import {useRecipesList} from '@pengepantry/core/lib/store/store-selectors';
import {ListItemRedux} from 'components/recipe-list/RecipeListItem.redux';

export const RecipeListRedux = () => {
  const recipes = useRecipesList();
  return (
    <>
      {recipes.map(recipe => (
        <ListItemRedux key={recipe.id} item={recipe} />
      ))}
    </>
  );
};
