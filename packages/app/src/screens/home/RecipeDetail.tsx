import React from 'react';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {RecipeDetailRedux} from 'components/recipe-detail/RecipeDetail.redux';

export const RecipeDetailScreen = () => {
  return (
    <Screen>
      <RecipeDetailRedux recipeId={'1'} />
    </Screen>
  );
};
